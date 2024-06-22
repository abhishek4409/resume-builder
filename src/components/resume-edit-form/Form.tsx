import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';

export const Form = ({ children, title }) => (
    <Grid container sx={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                })}
            >
                <Card
                    variant="outlined"
                    sx={(theme) => ({
                        width: '80%',
                        minHeight: '40vh',
                        borderTop: 'solid 4px #757575',
                        borderRadius: '0.5rem',
                        [theme.breakpoints.down(1700)]: {
                            width: '100%',
                        },
                        '& .MuiCardContent-root': {
                            padding: '1rem 2rem',
                            [theme.breakpoints.down('md')]: {
                                padding: 0,
                            },
                        },
                        '& .MuiCardHeader-root': {
                            padding: '1rem 2rem',
                            [theme.breakpoints.down('md')]: {
                                padding: '1rem 1rem',
                            },
                        },
                    })}
                >
                    <CardHeader title={title} />
                    <CardContent>{children}</CardContent>
                </Card>
            </Box>
        </Grid>
    </Grid>
);
