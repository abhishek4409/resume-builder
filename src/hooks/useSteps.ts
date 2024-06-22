import React, { useEffect, useState } from 'react';
import { convertToSentenceCase } from '../utils/utils';
import { useDispatch } from 'react-redux';

interface IUseSteps {
    (
        template: any
    ): [steps: Array<string>, currentSteps: number, setCurrentStep: any];
}

export const useSteps: IUseSteps = (template: any) => {
    const dispatch = useDispatch();

    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState<number>();

    useEffect(() => {
        setStepsFromTemplates();
    }, []);

    useEffect(() => {
        dispatch({
            type: 'SET_CURRENT_STEP',
            payload: currentStep,
        });
    }, [currentStep]);

    const setStepsFromTemplates = () => {
        const steps = template?.sections?.map((section: any) => {
            if (section?.label) {
                return section.label || '';
            } else return convertToSentenceCase(section.name) || '';
        });

        setSteps(steps);
    };

    return [steps, currentStep, setCurrentStep];
};
