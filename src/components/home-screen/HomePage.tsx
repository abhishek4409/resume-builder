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
                sx={{
                    fontFamily: 'Montserrat',
                }}
            >
                {' '}
                Resume Builder
            </Typography>
        </Box>
        <Box sx={{ mt: '1rem' }} />
        <Box className="lineUp">
            <Typography
                variant="h4"
                sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: 200,
                }}
            >
                {' '}
                Create a Professional Resume in Minutes
            </Typography>
        </Box>
        <Grid
            container
            justifyContent="space-evenly"
            marginTop="6rem"
            maxWidth="70%"
            sx={{
                '& .MuiButton-root': {
                    aspectRatio: 5,
                    width: '20rem',
                    borderRadius: '1rem',
                    marginBottom: '2rem',
                    '&.active': {
                        bgcolor: 'primary.main',
                        color: 'white',
                    },
                },
            }}
        >
            <Button
                size="large"
                variant="outlined"
                onClick={handleChooseTemplateClick}
                className={activeTab === 0 ? 'active' : ''}
            >
                Choose Template
            </Button>
            <Button
                size="large"
                variant="outlined"
                onClick={handleSavedTemplateClick}
                className={activeTab === 1 ? 'active' : ''}
            >
                Saved Resumes
            </Button>
        </Grid>
        {activeTab === 0 && <ResumeTemplates onClick={onTemplateClick} />}
        {activeTab === 1 && <SavedResume onClick={onTemplateClick} />}
    </Grid>
);
