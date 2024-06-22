import { Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

export const FormStep = ({ steps, currentStep }) => (
    <Grid container sx={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((stepName: any) => (
                    <Step key={stepName}>
                        <StepLabel>{stepName}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Grid>
    </Grid>
);
