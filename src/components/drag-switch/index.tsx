import React from 'react';
import { useSelect } from '../../hooks/useSelect';
import { dragEnableSelector } from '../../selectors';
import { Box, Switch, Toolbar, Tooltip, Typography } from '@mui/material';
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
        <Tooltip
            title={'Enabling this will allow resume contents to be dragged'}
            arrow
        >
            <Box
                sx={{
                    display: 'flex',
                    border: 'solid 1px',
                    borderRadius: '1rem',
                    borderColor: 'primary.light',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    height: ' 30px',
                    minWidth: '118px',
                }}
            >
                <Typography color="primary.main" fontSize="inherit">
                    Draggable
                </Typography>
                <Switch
                    size="small"
                    checked={Boolean(selectDragEnable)}
                    onChange={onChange}
                />
            </Box>
        </Tooltip>
    );
};

export default DragSwicth;
