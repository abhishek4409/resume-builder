import { ArrowBack } from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const goToHomeScreen = () => {
        navigate('/');
    };
    return (
        <Paper
            elevation={1}
            sx={{ borderRadius: 0, padding: '0.5rem', width: '100%' }}
        >
            <Grid container>
                <Grid item xs={11}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: '1rem' }} />
                        <ArrowBack
                            sx={{ cursor: 'pointer' }}
                            onClick={goToHomeScreen}
                        />
                        <Box sx={{ mr: '1rem' }} />
                        <Typography
                            display="inline"
                            variant="h6"
                            sx={{
                                fontFamily: 'Montserrat',
                            }}
                        >
                            {' '}
                            Resume Builder
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};
