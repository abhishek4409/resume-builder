import React, { useState } from 'react';
import { Box, Button, Paper, Popover, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelect } from '../../hooks/useSelect';
import {
    resumeThemeColorListSelector,
    resumeThemeColorSelector,
} from '../../selectors';

const ColorIndicator = ({ color, variant, action }) => {
    const dispatch = useDispatch();
    const [selectFormattingColor] = useSelect(resumeThemeColorSelector);

    const handleColorPick = () => {
        dispatch({
            type: 'SET_RESUME_FORMATTING_COLOR',
            payload: {
                ...selectFormattingColor,
                ...(variant === 'primary'
                    ? { main: color.main }
                    : { light: color.light }),
            },
        });
    };

    return (
        <div
            onClick={action === 'selection' ? handleColorPick : () => {}}
            style={{
                borderStyle: 'solid',
                borderWidth: 10,
                borderRadius: '100%',
                borderColor:
                    variant === 'primary' ? color['main'] : color['light'],
                ...(action === 'view'
                    ? {
                          borderColor: `${color['main']} ${color['main']}  ${color['light']} ${color['light']}`,
                      }
                    : {}),
                rotate: '-45deg',
            }}
        />
    );
};

const ColorPicker = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [selectFormattingColor] = useSelect(resumeThemeColorSelector);
    const [selectFormattingColorList] = useSelect(resumeThemeColorListSelector);

    const handleColorPickerPopup = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Tooltip
                title={'Click to choose color of the resume content.'}
                arrow
            >
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: 'capitalize',
                        height: '32px',
                        fontSize: '12px',
                        borderRadius: '16px',
                        minWidth: 'fit-content',
                    }}
                    onClick={handleColorPickerPopup}
                >
                    {' '}
                    Theme:&nbsp;&nbsp;
                    <ColorIndicator
                        color={selectFormattingColor}
                        action="view"
                    />
                </Button>
            </Tooltip>
            <Popover
                id={'color-picker-popover'}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                elevation={4}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: '1rem',
                    },
                }}
                slotProps={{
                    paper: {
                        sx: {
                            overflow: 'visible',
                            mt: '-12px',
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '100%',
                                right: '50%',
                                borderLeft: '10px solid transparent',
                                borderRight: '10px solid transparent',
                                borderTop: '10px solid #999999',
                            },
                            '&:after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '98%',
                                right: '50%',
                                borderLeft: '10px solid transparent',
                                borderRight: '10px solid transparent',
                                borderTop: '10px solid white',
                            },
                        },
                    },
                }}
            >
                <Paper
                    sx={{
                        p: '0.8rem',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <div style={{ fontSize: '0.8rem', width: '5rem' }}>
                            Primary
                        </div>
                        {selectFormattingColorList.map((color, idx) => (
                            <>
                                {idx !== 0 && <Box sx={{ ml: '0.8rem' }} />}
                                <ColorIndicator
                                    key={color}
                                    color={color}
                                    variant="primary"
                                    action="selection"
                                />
                            </>
                        ))}
                    </Box>
                    <Box sx={{ mt: '1rem' }} />
                    <Box sx={{ display: 'flex' }}>
                        <div style={{ fontSize: '0.8rem', width: '5rem' }}>
                            Secondary
                        </div>
                        {selectFormattingColorList.map((color, idx) => (
                            <>
                                {idx !== 0 && <Box sx={{ ml: '0.8rem' }} />}
                                <ColorIndicator
                                    key={color}
                                    color={color}
                                    variant="secondary"
                                    action="selection"
                                />
                            </>
                        ))}
                    </Box>
                </Paper>
            </Popover>
        </>
    );
};

export default ColorPicker;
