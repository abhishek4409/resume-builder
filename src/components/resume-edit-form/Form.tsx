import { Visibility } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Tooltip,
} from '@mui/material';
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
                        [theme.breakpoints.down(980)]: {
                            width: '100%',
                        },
                        '& .MuiCardContent-root': {
                            padding: '1rem 2rem',
                            [theme.breakpoints.down(600)]: {
                                '& .MuiGrid-root': {
                                    maxWidth: '100%',
                                    flexBasis: '100%',
                                },
                            },
                        },
                        '& .MuiCardHeader-root': {
                            padding: '1rem 2rem',
                        },
                    })}
                >
                    <CardHeader
                        title={title}
                        action={
                            <Tooltip title={'Click to preview resume'} arrow>
                                <IconButton>
                                    <Visibility
                                        onClick={() =>
                                            document
                                                ?.getElementById('resume-main')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                })
                                        }
                                    />
                                </IconButton>
                            </Tooltip>
                        }
                    />

                    <CardContent>{children}</CardContent>
                </Card>
            </Box>
        </Grid>
    </Grid>
);
