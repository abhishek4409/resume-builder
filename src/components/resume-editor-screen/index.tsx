import { Box, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import ResumeEditForm from '../resume-edit-form';
import { UnstyledTemplateProfessional } from '../templates/UnstyledTemplateProfessional';
import { StyledTemplateProfessional } from '../templates/StyledTemplateProfessional';
import { Header } from './Header';
import { useSelect } from '../../hooks/useSelect';
import { resumeTitleSelector, templateTypeSelector } from '../../selectors';
import { useDispatch } from 'react-redux';
import AlertBox from '../alert-box';

const ResumeEditorScreen = () => {
    const [selectResumeTitle] = useSelect(resumeTitleSelector);
    const [selectTemplateType] = useSelect(templateTypeSelector);

    const disptach = useDispatch();

    const handleResumeTitle = (event) => {
        const title = event?.target?.value;
        disptach({
            type: 'SET_RESUME_TITLE',
            payload: title,
        });
    };

    const openTemplate = () => {
        switch (selectTemplateType) {
            case 'COLLEDGE_GRADUATE_TEMPLATE': {
                return <UnstyledTemplateProfessional />;
            }
            case 'PROFESSIONAL_TEMPLATE': {
                return <StyledTemplateProfessional />;
            }

            default:
                return <></>;
        }
    };

    return (
        <>
            <Grid container>
                <Header />
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        margin: '1rem',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={(theme) => ({
                            maxWidth: '980px',
                            flex: '0 1 980px',
                        })}
                    >
                        <Box>
                            <ResumeEditForm />
                        </Box>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            [theme.breakpoints.down(840)]: {
                                width: '100px',
                            },
                        })}
                    >
                        <Box sx={{ mt: '1rem' }} />
                        <TextField
                            size="small"
                            variant="standard"
                            value={selectResumeTitle}
                            inputProps={{ style: { textAlign: 'center' } }}
                            onChange={handleResumeTitle}
                            placeholder="Enter Title"
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
                                [theme.breakpoints.down(840)]: {
                                    transform:
                                        'scale(0.7) translate(-63%, -22.5%)',
                                },
                                [theme.breakpoints.down(600)]: {
                                    transform:
                                        'scale(0.5) translate(-88.5%, -51.5%)',
                                },
                                [theme.breakpoints.down(450)]: {
                                    transform:
                                        'scale(0.45) translate(-97%, -63.5%)',
                                },
                            })}
                        >
                            {openTemplate()}
                        </Paper>
                    </Box>
                </Box>
            </Grid>

            <AlertBox />
        </>
    );
};

export default ResumeEditorScreen;
