const initState = {
    show: false,
    severity: 'success',
    message: null,
};

export const alertReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'SHOW_ALERT_BOX': {
            return {
                show: true,
                severity: action.payload.severity,
                message: action?.payload?.message,
            };
        }
        case 'HIDE_ALERT_BOX': {
            return {
                severity: 'success',
                message: null,
                show: false,
            };
        }
        default:
            return state;
    }
};
