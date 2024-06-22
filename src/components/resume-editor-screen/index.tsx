import { Alert, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import ResumeEditForm from '../resume-edit-form';
import Template from '../templates/unstyledTemplateA';
import { Header } from './Header';
import { useSelect } from '../../hooks/useSelect';
import { resumeTitleSelector } from '../../selectors';
import { useDispatch } from 'react-redux';
import { Alarm, CheckCircleOutline } from '@mui/icons-material';
import AlertBox from '../alert-box';

const ResumeEditorScreen = () => {
    const [selectResumeTitle] = useSelect(resumeTitleSelector);
    const disptach = useDispatch();

    const handleResumeTitle = (event) => {
        const title = event?.target?.value;
        disptach({
            type: 'SET_RESUME_TITLE',
            payload: title,
        });
    };

    return (
        <>
            <Grid container>
                <Header />
                <Grid
                    container
                    sx={{
                        margin: '1rem',
                    }}
                >
                    <Grid item desktop={6}>
                        <Box>
                            <ResumeEditForm />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        desktop={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            size="small"
                            variant="standard"
                            value={selectResumeTitle}
                            inputProps={{ style: { textAlign: 'center' } }}
                            onChange={handleResumeTitle}
                        />
                        <Box sx={{ mb: '1rem' }} />
                        <Paper
                            elevation={10}
                            id="resume-paper"
                            sx={{
                                width: '210mm',
                                minHeight: '297mm',
                                '-webkit-box-sizing': 'border-box',
                                '-moz-box-sizing': 'border-box',
                                'box-sizing': 'border-box',
                            }}
                        >
                            <Template />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <AlertBox />
        </>
    );
};

export default ResumeEditorScreen;
