import React from 'react';
import { Button, Grid, Box } from '@mui/material';
import ColorPicker from '../color-picker';
import FontStyler from '../font-styler';
import DragSwicth from '../drag-switch';
import SaveResume from '../save-resume';

export const NavigationButtons = ({ handlePreviousStep, handleNextStep }) => {
    return (
        <Grid
            container
            justifyContent="center"
            sx={(theme) => ({
                marginTop: '6rem',
                [theme.breakpoints.down('lg')]: {
                    // display: 'none',
                },
            })}
        >
            <Box
                sx={(theme) => ({
                    width: '80%',
                    display: 'flex',
                    [theme.breakpoints.down(1720)]: {
                        width: '100%',
                    },
                })}
            >
                <Grid item xs={9}>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'flex-start',
                            overflowX: 'auto',
                            overflowY: 'hidden',
                            [theme.breakpoints.down('md')]: {
                                width: '24rem',
                            },
                            [theme.breakpoints.down('sm')]: {
                                width: '14rem',
                            },
                        })}
                    >
                        <ColorPicker />
                        <Box sx={{ ml: '1rem' }} />
                        <FontStyler />
                        <Box sx={{ ml: '1rem' }} />
                        <DragSwicth />
                        <Box sx={{ ml: '1rem' }} />
                        <SaveResume />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'flex-end',
                            [theme.breakpoints.down('sm')]: {
                                maxWidth: '100%',
                                flexBasis: '100%',
                            },
                        })}
                    >
                        <Button
                            variant="outlined"
                            onClick={handlePreviousStep}
                            sx={{
                                borderRadius: '2rem',
                                aspectRatio: 3,
                                width: '6rem',
                                textTransform: 'capitalize',
                                fontSize: '1rem',
                            }}
                        >
                            Previous
                        </Button>
                        <Box sx={{ ml: '1rem' }} />
                        <Button
                            variant="contained"
                            onClick={handleNextStep}
                            sx={{
                                borderRadius: '2rem',
                                aspectRatio: 3,
                                width: '6rem',
                                textTransform: 'capitalize',
                                fontSize: '1rem',
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    );
};
