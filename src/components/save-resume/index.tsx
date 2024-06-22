import { CheckCircleOutline, SaveAs } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Grid,
    Paper,
    Popover,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import {
    resumeFormattingSelector,
    resumeTitleSelector,
    resumeUIDSelector,
    templateSelector,
} from '../../selectors';
import { useSelect } from '../../hooks/useSelect';
import { useDispatch } from 'react-redux';

const SaveResume = () => {
    const dispatch = useDispatch();
    const [selectResumeTitle] = useSelect(resumeTitleSelector);
    const [selectResumeFormatting] = useSelect(resumeFormattingSelector);
    const [selectTemplate] = useSelect(templateSelector);
    const [selectResumeUID] = useSelect(resumeUIDSelector);

    const handleSaveAsPopup = () => {
        dispatch({
            type: 'SAVE_RESUME_AND_PREFERENCES',
            payload: {
                selectTemplate,
                selectResumeFormatting,
                selectResumeUID,
            },
        });
        dispatch({
            type: 'SHOW_ALERT_BOX',
            payload: {
                severity: 'success',
                message: 'Resume Saved Succesfully',
            },
        });
    };

    return (
        <>
            <Button
                variant="outlined"
                disabled={!selectResumeTitle?.length}
                sx={{
                    borderRadius: '1rem',
                    width: 'fit-content',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                }}
                onClick={handleSaveAsPopup}
            >
                {' '}
                Save:&nbsp;
                <SaveAs />
            </Button>
        </>
    );
};

export default SaveResume;
