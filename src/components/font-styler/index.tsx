import React from 'react';
import { Box, MenuItem, Select } from '@mui/material';
import {
    resumeFontFamilyListSelector,
    resumeFontFamilySelector,
    resumeFontSizeListSelector,
    resumeFontSizeSelector,
} from '../../selectors';
import { useSelect } from '../../hooks/useSelect';
import { useDispatch } from 'react-redux';

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
                <Select
                    id="font-size-select"
                    value={selectCurrentFont}
                    label="Font Size"
                    onChange={handleFontChange}
                    sx={{
                        height: '2.6rem',
                        border: 'solid 1px',
                        borderRadius: '1rem',
                        borderColor: 'primary.light',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                >
                    {selectFontList.map((font) => (
                        <MenuItem key={font} value={font}>
                            {font}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Box sx={{ ml: '1rem' }} />
            <Box>
                <Select
                    id="font-family-select"
                    value={selectCurrentFontFamily}
                    label="Font Family"
                    onChange={handleFontFamilyChange}
                    sx={{
                        height: '2.6rem',
                        width: '9rem',
                        border: 'solid 1px',
                        borderRadius: '1rem',
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
            </Box>
        </>
    );
};

export default FontStyler;
