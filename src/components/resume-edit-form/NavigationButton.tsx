import React from 'react';
import { Button, Grid, Box } from '@mui/material';
import ColorPicker from '../color-picker';
import FontStyler from '../font-styler';
import DragSwicth from '../drag-switch';
import SaveResume from '../save-resume';

export const NavigationButtons = ({ handlePreviousStep, handleNextStep }) => {
    return (
        <Grid container justifyContent="center" sx={{ marginTop: '6rem' }}>
            <Box sx={{ width: '80%', display: 'flex' }}>
                <Grid item xs={9}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
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
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
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
