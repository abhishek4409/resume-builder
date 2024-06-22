import { produce } from 'immer';

const initState = {
    colorList: [
        { main: '#000000', light: '#000000' },
        { main: '#000000', light: '#999999' },
        { main: '#22A669', light: '#98eac4' },
        { main: '#FFCC00', light: '#ffeb99' },
        { main: '#17A9E4', light: '#a1ddf6' },
        { main: '#8C0000', light: '#ff6b6b' },
        { main: '#00008B', light: '#6b6bff' },
        { main: '#005000', light: '#53ff53' },
        { main: '#7D7D7D', light: '#cbcbcb' },
    ],
    currentColor: { main: '#000000', light: '#000000' },
    fontSizeList: Array(13)
        .fill()
        .map((e, i) => `${i + 8}px`),
    currentFontSize: '16px',
    fontFamilyList: ['sans-serif', 'serif', 'monospace', 'cursive'],
    currentFontFamily: 'sans-serif',
    allowDrag: false,
    currentStep: 0,
    resumeTitle: 'Untitled',
    uid: null,
};

export const formattingReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'RESET_RESUME_FORMATTING_STATE': {
            return initState;
        }
        case 'SET_CURRENT_STEP': {
            const newState = produce(state, (draft: any) => {
                draft.currentStep = action.payload;
            });
            return newState;
        }
        case 'SET_RESUME_FORMATTING_COLOR': {
            const newState = produce(state, (draft: any) => {
                draft.currentColor = action.payload;
            });

            return newState;
        }
        case 'SET_RESUME_FONT_SIZE': {
            const newState = produce(state, (draft: any) => {
                draft.currentFontSize = action.payload;
            });

            return newState;
        }
        case 'SET_RESUME_FONT_FAMILY': {
            const newState = produce(state, (draft: any) => {
                draft.currentFontFamily = action.payload;
            });

            return newState;
        }
        case 'SET_ALLOW_DRAG': {
            const newState = produce(state, (draft: any) => {
                draft.allowDrag = action.payload;
            });

            return newState;
        }
        case 'SET_RESUME_TITLE': {
            const newState = produce(state, (draft: any) => {
                draft.resumeTitle = action.payload;
            });

            return newState;
        }
        case 'SET_UID_FOR_TEMPLATE': {
            const newState = produce(state, (draft: any) => {
                draft.uid = action.payload;
            });

            return newState;
        }

        case 'LOAD_SAVED_RESUME_FORMATTING_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
