import React, { useEffect } from 'react';
import { FormStep } from './FormStep';
import { useSteps } from '../../hooks/useSteps';
import { tempJSON } from '../templates/tempJSON';
import { Form } from './Form';
import { DynamicFields } from './DynamicFields';
import { useSelect } from '../../hooks/useSelect';
import {
    templateSelector,
    resumeCurrentStepSelector,
    resumeUIDSelector,
} from '../../selectors';
import { useDispatch } from 'react-redux';
import { downloadToPDF } from '../../utils/utils';
import { NavigationButtons } from './NavigationButton';
import { v4 as uuidv4 } from 'uuid';

const ResumeEditForm = () => {
    const dispatch = useDispatch();

    const [selectCurrentStep] = useSelect(resumeCurrentStepSelector);
    const [selectResumeUID] = useSelect(resumeUIDSelector);
    const [selectTemplate] = useSelect(templateSelector);

    const [steps, currentStep, setCurrentStep] = useSteps(tempJSON);

    const handleNextStep = () => {
        if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
    };

    const handlePreviousStep = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };

    if (!selectResumeUID) {
        dispatch({ type: 'SET_UID_FOR_TEMPLATE', payload: uuidv4() });
    }

    const handleInputChange = (event, field, currentStep, index) => {
        let value;
        switch (field?.type) {
            case 'text': {
                value = event?.target?.value;
                break;
            }
            case 'checkbox': {
                value = event?.target?.checked;
                break;
            }

            default:
                value = event?.target?.value;
        }

        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                currentFieldIndex: index,
                currentStep,
                newValue: value,
            },
        });
    };

    const exportToPDF = () => {
        const id = 'resume-paper';
        const element = document.getElementById(id);
        const resumeTitle = 'Untitled Resume';
        downloadToPDF(id, element, resumeTitle);
    };

    useEffect(() => {
        setCurrentStep(selectCurrentStep);
    }, []);

    return (
        <>
            <FormStep steps={steps} currentStep={currentStep} />
            <NavigationButtons
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
            />
            <Form title={steps[currentStep]}>
                <DynamicFields
                    selectTemplate={selectTemplate}
                    currentStep={currentStep}
                    handleInputChange={handleInputChange}
                    exportToPDF={exportToPDF}
                />
            </Form>
        </>
    );
};

export default ResumeEditForm;
