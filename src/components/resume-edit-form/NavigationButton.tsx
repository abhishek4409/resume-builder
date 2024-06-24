import React from 'react';
import { Button, Grid, Box, Tooltip } from '@mui/material';
import ColorPicker from '../color-picker';
import FontStyler from '../font-styler';
import DragSwicth from '../drag-switch';
import SaveResume from '../save-resume';

export const NavigationButtons = ({
    handlePreviousStep,
    handleNextStep,
    checkDisabled,
}) => {
    return (
        <Grid
            container
            justifyContent="center"
            sx={(theme) => ({
                marginTop: '6rem',
            })}
        >
            <Box
                sx={(theme) => ({
                    width: '80%',
                    display: 'flex',
                    [theme.breakpoints.down(980)]: {
                        width: '100%',
                    },
                })}
            >
                <Grid item xs={9}>
                    <Box
                        id="left-tool-parent"
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'flex-start',
                            overflowX: 'auto',
                            overflowY: 'hidden',
                            [theme.breakpoints.down(800)]: {
                                width: '450px',
                            },
                            [theme.breakpoints.down(670)]: {
                                width: '320px',
                            },
                            [theme.breakpoints.down(550)]: {
                                width: '200px',
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
                        })}
                    >
                        <Tooltip
                            title={
                                checkDisabled('Previous')
                                    ? ''
                                    : 'Go back to previous section of the resume'
                            }
                            arrow
                        >
                            <Button
                                variant="outlined"
                                onClick={handlePreviousStep}
                                disabled={checkDisabled('Previous')}
                                sx={{
                                    textTransform: 'capitalize',
                                    height: '32px',
                                    fontSize: '12px',
                                    borderRadius: '16px',
                                    minWidth: 'fit-content',
                                }}
                            >
                                Previous
                            </Button>
                        </Tooltip>
                        <Box sx={{ ml: '1rem' }} />
                        <Tooltip
                            title={
                                checkDisabled('Next')
                                    ? ''
                                    : 'Go to the next section of the resume'
                            }
                            arrow
                        >
                            <Button
                                variant="contained"
                                onClick={handleNextStep}
                                disabled={checkDisabled('Next')}
                                sx={{
                                    textTransform: 'capitalize',
                                    height: '32px',
                                    fontSize: '12px',
                                    borderRadius: '16px',
                                    minWidth: 'fit-content',
                                }}
                            >
                                Next
                            </Button>
                        </Tooltip>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    );
};
