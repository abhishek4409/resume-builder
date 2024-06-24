const initState = {
    type: null,
};

export const templateTypeReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'SET_TEMPLATE_TYPE': {
            return {
                type: action.payload,
            };
        }
        default:
            return state;
    }
};
