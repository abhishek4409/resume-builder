import { Grid } from '@mui/material';
import TemplateA from '../templates/unstyledTemplateA';
import React, { useRef } from 'react';
import { TemplateWrapper } from './TemplateWrapper';
import { Route, Routes, useLocation } from 'react-router-dom';

const ResumeTemplates = ({ onClick }) => {
    return (
        <Grid container>
            <Grid item desktop={6}>
                <TemplateWrapper
                    title="Professional Resume"
                    clickAction={onClick}
                >
                    <TemplateA />
                </TemplateWrapper>
            </Grid>
            <Grid item desktop={6}>
                <TemplateWrapper
                    title="Colledge Graduate Resume"
                    clickAction={onClick}
                >
                    <TemplateA />
                </TemplateWrapper>
            </Grid>
        </Grid>
    );
};
export default ResumeTemplates;
