import { tempJSON } from '../components/templates/tempJSON';
import { produce } from 'immer';

const templateObject = JSON.parse(JSON.stringify(tempJSON));

export const templateReducer = (state = templateObject, action: any) => {
    switch (action.type) {
        case 'RESET_FORM_DATA': {
            return templateObject;
        }
        case 'SET_FIELD_VALUE': {
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
        case 'SET_SECTION_DRAG_POSITION': {
            const { currentSectionIndex, positionX } = action.payload;

            const newState = produce(state, (draft: any) => {
                draft.sections[currentSectionIndex].transformX = positionX;
            });

            return newState;
        }
        case 'LOAD_SAVED_RESUME_TEMPLATE_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
