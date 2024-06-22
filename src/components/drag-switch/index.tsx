import React from 'react';
import { useSelect } from '../../hooks/useSelect';
import { dragEnableSelector } from '../../selectors';
import { Box, InputLabel, Switch, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

const DragSwicth = () => {
    const [selectDragEnable] = useSelect(dragEnableSelector);
    const dispatch = useDispatch();

    const onChange = (event) => {
        const checked = event.target.checked;

        dispatch({
            type: 'SET_ALLOW_DRAG',
            payload: Boolean(checked),
        });
    };
    return (
        <Box
            sx={{
                display: 'flex',
                width: '10rem',
                border: 'solid 1px',
                borderRadius: '1rem',
                borderColor: 'primary.light',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography color="primary.main">Draggable</Typography>
            <Switch checked={Boolean(selectDragEnable)} onChange={onChange} />
        </Box>
    );
};

export default DragSwicth;
