import React, { useEffect, useState } from 'react';
import { CancelOutlined, CheckCircleOutline } from '@mui/icons-material';
import { useSelect } from '../../hooks/useSelect';
import { alertBoxSelector } from '../../selectors';
import { Alert } from '@mui/material';
import { useDispatch } from 'react-redux';

const AlertBox = () => {
    const dispatch = useDispatch();
    const [selectAlertBox] = useSelect(alertBoxSelector);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (selectAlertBox.show) {
            const hideAlertBoxActionDispatch = () => {
                dispatch({ type: 'HIDE_ALERT_BOX' });
            };
            const id: NodeJS.Timeout = setTimeout(
                () => hideAlertBoxActionDispatch(),
                5000
            );
            setTimerId(id);
        }

        return () => {
            clearTimeout(timerId as NodeJS.Timeout);
            setTimerId(null);
        };
    }, [selectAlertBox.show]);

    return (
        selectAlertBox.show && (
            <Alert
                icon={
                    selectAlertBox.severity === 'success' ? (
                        <CheckCircleOutline />
                    ) : (
                        <CancelOutlined />
                    )
                }
                severity={selectAlertBox.severity}
                sx={{ position: 'absolute', top: 0, left: '40%' }}
            >
                {selectAlertBox?.message || ''}
            </Alert>
        )
    );
};

export default AlertBox;
