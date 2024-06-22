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
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        item
                        xs={8}
                        sx={(theme) => ({
                            [theme.breakpoints.down(1380)]: {
                                flexBasis: '100%',
                                maxWidth: '100%',
                            },
                        })}
                    >
                        <Box>
                            <ResumeEditForm />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 0,
                            [theme.breakpoints.down(2100)]: {
                                flexBasis: '55%',
                                maxWidth: '55%',
                            },
                        })}
                    >
                        <TextField
                            size="small"
                            variant="standard"
                            value={selectResumeTitle}
                            inputProps={{ style: { textAlign: 'center' } }}
                            onChange={handleResumeTitle}
                            placeholder="Resume Title"
                        />
                        <Box sx={{ mb: '1rem' }} />
                        <Paper
                            elevation={10}
                            id="resume-paper"
                            sx={(theme) => ({
                                width: '210mm',
                                minHeight: '297mm',
                                '-webkit-box-sizing': 'border-box',
                                '-moz-box-sizing': 'border-box',
                                'box-sizing': 'border-box',
                                [theme.breakpoints.down('md')]: {
                                    transform: 'scale(0.9) translate(-2%, 0%)',
                                },
                                [theme.breakpoints.down('750')]: {
                                    transform:
                                        'scale(0.7) translate(-3%, -16%)',
                                },
                                [theme.breakpoints.down('sm')]: {
                                    transform:
                                        'scale(0.6) translate(-3%, -28%)',
                                },
                            })}
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
