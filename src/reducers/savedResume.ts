import { produce } from 'immer';

const savedResumeMap = {};

export const savedResumeReducer = (state = savedResumeMap, action: any) => {
    switch (action.type) {
        case 'CLEAR_ALL_SAVED_DATA': {
            return new Map();
        }
        case 'SAVE_RESUME_AND_PREFERENCES': {
            const newState = produce(state, (draft: any) => {
                draft[action?.payload?.selectResumeUID] = action.payload;
            });
            return newState;
        }
        case 'DELETE_RESUME_AND_PREFERENCES': {
            const newState = produce(state, (draft: any) => {
                delete draft[action?.payload?.selectResumeUID];
            });
            return newState;
        }
        default:
            return state;
    }
};
