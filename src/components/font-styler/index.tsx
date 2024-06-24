import React from 'react';
import { Box, IconButton, MenuItem, Select, Tooltip } from '@mui/material';
import {
    resumeFontFamilyListSelector,
    resumeFontFamilySelector,
    resumeFontSizeListSelector,
    resumeFontSizeSelector,
} from '../../selectors';
import { useSelect } from '../../hooks/useSelect';
import { useDispatch } from 'react-redux';
import { ArrowRightAlt, ChevronRight } from '@mui/icons-material';

const FontStyler = () => {
    const [selectFontList] = useSelect(resumeFontSizeListSelector);
    const [selectCurrentFont] = useSelect(resumeFontSizeSelector);

    const [selectFontFamilyList] = useSelect(resumeFontFamilyListSelector);
    const [selectCurrentFontFamily] = useSelect(resumeFontFamilySelector);

    const dispatch = useDispatch();

    const handleFontChange = (event: any) => {
        const value = event.target.value;
        dispatch({
            type: 'SET_RESUME_FONT_SIZE',
            payload: value,
        });
    };

    const handleFontFamilyChange = (event: any) => {
        const value = event.target.value;
        dispatch({
            type: 'SET_RESUME_FONT_FAMILY',
            payload: value,
        });
    };

    return (
        <>
            <Box>
                <Tooltip
                    title={
                        'Font selected will be the root font of the resume and all text will be scaled up'
                    }
                    arrow
                >
                    <Select
                        id="font-size-select"
                        value={selectCurrentFont}
                        label="Font Size"
                        onChange={handleFontChange}
                        sx={{
                            height: '32px',
                            border: 'solid 1px',
                            borderColor: 'primary.light',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            fontSize: '12px',
                            borderRadius: '16px',
                            minWidth: '74px',
                        }}
                    >
                        {selectFontList.map((font) => (
                            <MenuItem key={font} value={font}>
                                {font}
                            </MenuItem>
                        ))}
                    </Select>
                </Tooltip>
            </Box>
            <Box sx={{ ml: '1rem' }} />

            <Box>
                <Tooltip title={'Font style'} arrow>
                    <Select
                        id="font-family-select"
                        value={selectCurrentFontFamily}
                        label="Font Family"
                        onChange={handleFontFamilyChange}
                        sx={{
                            height: '32px',
                            fontSize: '12px',
                            borderRadius: '16px',
                            maxWidth: '115px',
                            border: 'solid 1px',
                            borderColor: 'primary.light',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        }}
                    >
                        {selectFontFamilyList.map((font) => (
                            <MenuItem key={font} value={font}>
                                {font}
                            </MenuItem>
                        ))}
                    </Select>
                </Tooltip>
            </Box>
            <IconButton
                onClick={() =>
                    document.getElementById('left-tool-parent')?.scrollBy(20, 0)
                }
                sx={(theme) => ({
                    display: 'none',
                    [theme.breakpoints.down(840)]: {
                        position: 'absolute',
                        left: '204px',
                        marginTop: '-4px',
                        display: 'block',
                    },
                    [theme.breakpoints.down(800)]: {
                        position: 'absolute',
                        left: '462px',
                        marginTop: '-4px',
                        display: 'block',
                    },
                    [theme.breakpoints.down(670)]: {
                        position: 'absolute',
                        left: '320px',
                        marginTop: '-4px',
                        display: 'block',
                    },
                    [theme.breakpoints.down(550)]: {
                        position: 'absolute',
                        left: '205px',
                        marginTop: '-4px',
                        display: 'block',
                    },
                })}
            >
                <ChevronRight />
            </IconButton>
        </>
    );
};

export default FontStyler;
