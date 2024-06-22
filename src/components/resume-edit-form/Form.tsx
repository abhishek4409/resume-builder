import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';

export const Form = ({ children, title }) => (
    <Grid container sx={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        width: '80%',
                        minHeight: '40vh',
                        borderTop: 'solid 4px #757575',
                        borderRadius: '0.5rem',
                        '& .MuiCardContent-root': {
                            padding: '1rem 2rem',
                        },
                        '& .MuiCardHeader-root': {
                            padding: '1rem 2rem',
                        },
                    }}
                >
                    <CardHeader title={title} />
                    <CardContent>{children}</CardContent>
                </Card>
            </Box>
        </Grid>
    </Grid>
);
