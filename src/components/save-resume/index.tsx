import { SaveAs } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import React from 'react';
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

    const isDisabled = !selectResumeTitle?.length;

    return (
        <>
            <Tooltip
                title={
                    isDisabled
                        ? 'Enter any Resume title to enable save'
                        : 'This will save resume contents and its preferences like font size, color and dragged state. You can view and edit resumes from the "Saved Resume" section of the home page'
                }
                arrow
            >
                <span>
                    <Button
                        variant="outlined"
                        disabled={isDisabled}
                        sx={{
                            textTransform: 'capitalize',
                            height: '32px',
                            fontSize: '12px',
                            borderRadius: '16px',
                            minWidth: 'fit-content',
                        }}
                        onClick={handleSaveAsPopup}
                    >
                        {' '}
                        Save:&nbsp;
                        <SaveAs />
                    </Button>
                </span>
            </Tooltip>
        </>
    );
};

export default SaveResume;
