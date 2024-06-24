import React, { useEffect } from 'react';
import { FormStep } from './FormStep';
import { useSteps } from '../../hooks/useSteps';

import { Form } from './Form';
import { DynamicFields } from './DynamicFields';
import { useSelect } from '../../hooks/useSelect';
import {
    templateSelector,
    resumeCurrentStepSelector,
    resumeUIDSelector,
    resumeTitleSelector,
} from '../../selectors';

import { useDispatch } from 'react-redux';
import { downloadToPDF, isAllRequiredFieldsAreFilled } from '../../utils/utils';
import { NavigationButtons } from './NavigationButton';
import { v4 as uuidv4 } from 'uuid';

const ResumeEditForm = () => {
    const dispatch = useDispatch();

    const [selectTemplate] = useSelect(templateSelector);

    const [steps, currentStep, setCurrentStep] = useSteps(selectTemplate);

    const [selectCurrentStep] = useSelect(resumeCurrentStepSelector);
    const [selectResumeUID] = useSelect(resumeUIDSelector);
    const [selectResumeTitle] = useSelect(resumeTitleSelector);

    const handleNextStep = () => {
        const isFormValid = isAllRequiredFieldsAreFilled(
            selectTemplate,
            currentStep
        );
        if (!isFormValid) {
            dispatch({
                type: 'SHOW_ALERT_BOX',
                payload: {
                    severity: 'error',
                    message: 'Please Fill all required fields',
                },
            });
            return;
        }

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

    const checkButtonDisabled = (name) => {
        if (
            name === 'Next' &&
            currentStep >= selectTemplate?.sections?.length
        ) {
            return true;
        }
        if (name === 'Previous' && currentStep === 0) return true;
    };

    const exportToPDF = () => {
        const id = 'resume-paper';
        const element = document.getElementById(id);
        const resumeTitle = selectResumeTitle || 'Untitled';
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
                checkDisabled={checkButtonDisabled}
            />
            <Form title={steps?.[currentStep]}>
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
