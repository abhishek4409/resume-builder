import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ResumeTemplates from '../resume-templates';
import SavedResume from '../saved-resumes';

export const HomePage = ({
    activeTab,
    handleChooseTemplateClick,
    handleSavedTemplateClick,
    onTemplateClick,
}) => (
    <Grid
        item
        lg={6}
        sx={{
            mt: '5vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}
    >
        <Box>
            <Typography
                variant="h2"
                fontWeight="400"
                sx={(theme) => ({
                    fontFamily: 'Montserrat',
                    [theme.breakpoints.down(720)]: {
                        fontSize: '2rem',
                    },
                    [theme.breakpoints.down(450)]: {
                        fontSize: '1.5rem',
                    },
                    [theme.breakpoints.down(250)]: {
                        fontSize: '1.2rem',
                    },
                })}
            >
                {' '}
                Resume Builder
            </Typography>
        </Box>
        <Box sx={{ mt: '1rem' }} />
        <Box className="lineUp">
            <Typography
                variant="h4"
                sx={(theme) => ({
                    textWrap: 'nowrap',
                    fontFamily: 'Montserrat',
                    fontWeight: 200,
                    [theme.breakpoints.down(720)]: {
                        fontSize: '1.3rem',
                    },
                    [theme.breakpoints.down(450)]: {
                        fontSize: '1rem',
                    },
                    [theme.breakpoints.down(320)]: {
                        fontSize: '0.7rem',
                    },
                    [theme.breakpoints.down(250)]: {
                        fontSize: '0.55rem',
                    },
                })}
            >
                {' '}
                Create a Professional Resume in Minutes
            </Typography>
        </Box>
        <Box
            // justifyContent="space-evenly"
            marginTop="50px"
            // maxWidth="70%"
            // minWidth="100%"
            sx={(theme) => ({
                display: 'flex',
                minWidth: '30vw',
                justifyContent: 'space-between',
                [theme.breakpoints.down(2200)]: {
                    flexDirection: 'column',
                    alignItems: 'center',
                },
                '& .MuiButton-root': {
                    aspectRatio: 5,
                    width: '20rem',
                    borderRadius: '1rem',
                    marginBottom: '1rem',
                    [theme.breakpoints.down(720)]: {
                        width: '18rem',
                    },
                    [theme.breakpoints.down(600)]: {
                        width: '17rem',
                    },
                    [theme.breakpoints.down(450)]: {
                        width: '15rem',
                    },
                    [theme.breakpoints.down(320)]: {
                        width: '12rem',
                        fontSize: '0.6rem',
                    },
                    '&.active': {
                        bgcolor: 'primary.main',
                        color: 'white',
                    },
                },
            })}
        >
            <Button
                variant="outlined"
                onClick={handleChooseTemplateClick}
                className={activeTab === 0 ? 'active' : ''}
            >
                Choose A Template
            </Button>
            <Button
                variant="outlined"
                onClick={handleSavedTemplateClick}
                className={activeTab === 1 ? 'active' : ''}
            >
                View Saved Resumes
            </Button>
        </Box>
        {activeTab === 0 && <ResumeTemplates onClick={onTemplateClick} />}
        {activeTab === 1 && <SavedResume onClick={onTemplateClick} />}
    </Grid>
);
