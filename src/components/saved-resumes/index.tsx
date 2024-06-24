import { Grid, Typography } from '@mui/material';
import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelect } from '../../hooks/useSelect';
import { savedResumeSelector } from '../../selectors';
import { SavedResumeListItems } from './SavedResumeListItems';
import { useDispatch } from 'react-redux';

const SavedResume = ({ onClick }) => {
    const [selectSavedResume] = useSelect(savedResumeSelector);
    const id = useId();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeletePress = (uid) => {
        dispatch({
            type: 'DELETE_RESUME_AND_PREFERENCES',
            payload: { selectResumeUID: uid },
        });
    };
    const onItemClick = (uid) => {
        dispatch({
            type: 'LOAD_SAVED_RESUME_TEMPLATE_DATA',
            payload: selectSavedResume?.[uid]?.selectTemplate,
        });
        dispatch({
            type: 'LOAD_SAVED_RESUME_FORMATTING_DATA',
            payload: selectSavedResume?.[uid]?.selectResumeFormatting,
        });
        navigate('/new-resume');
    };

    return (
        <Grid container marginTop="6rem" justifyContent="center">
            {Object.keys(selectSavedResume).map((resume) => (
                <SavedResumeListItems
                    key={id}
                    resumeName={
                        selectSavedResume[resume]?.['selectResumeFormatting']?.[
                            'resumeTitle'
                        ]
                    }
                    uid={resume}
                    onDeletePress={onDeletePress}
                    onItemClick={onItemClick}
                />
            ))}
            {!Object.keys(selectSavedResume)?.length && (
                <Typography variant="h4">No Saved Resumes</Typography>
            )}
        </Grid>
    );
};
export default SavedResume;
