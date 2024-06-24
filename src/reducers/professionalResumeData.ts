import { tempJSON2 } from '../components/templates/tempJSON2';
import { produce } from 'immer';

const professionalResumeFormConfig = JSON.parse(JSON.stringify(tempJSON2));

export const professionalResumeDataReducer = (
    state = professionalResumeFormConfig,
    action: any
) => {
    switch (action.type) {
        case 'SET_PROFFESIONAL_RESUME_FIELD_VALUE': {
            const {
                currentFieldIndex,
                currentStep: currSectionIndex,
                newValue,
            } = action.payload;

            const newState = produce(state, (draft: any) => {
                draft.sections[currSectionIndex].fields[
                    currentFieldIndex
                ].value = newValue;
            });

            return newState;
        }
        case 'SET_PROFFESIONAL_RESUME_SECTION_DRAG_POSITION': {
            const { currentSectionIndex, positionX } = action.payload;

            const newState = produce(state, (draft: any) => {
                draft.sections[currentSectionIndex].transformX = positionX;
            });

            return newState;
        }
        case 'LOAD_PROFFESIONAL_SAVED_RESUME_TEMPLATE_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
