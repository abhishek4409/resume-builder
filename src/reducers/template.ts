import { tempJSON } from '../components/templates/tempJSON';
import { tempJSON2 } from '../components/templates/tempJSON2';
import { produce } from 'immer';

const colledgeGraduateResumeFormConfig = JSON.parse(JSON.stringify(tempJSON));
const professionalResumeFormConfig = JSON.parse(JSON.stringify(tempJSON2));

export const templateReducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'LOAD_CLICKED_TEMPLATE': {
            if (action.payload === 'COLLEDGE_GRADUATE_TEMPLATE') {
                return colledgeGraduateResumeFormConfig;
            }
            if (action.payload === 'PROFESSIONAL_TEMPLATE') {
                return professionalResumeFormConfig;
            }
            return;
        }
        case 'CLEAR_TEMPLATE_DATA': {
            return {};
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
