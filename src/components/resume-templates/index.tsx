import { Box, Grid } from '@mui/material';
import { UnstyledTemplateProfessional } from '../templates/UnstyledTemplateProfessional';
import { StyledTemplateProfessional } from '../templates/StyledTemplateProfessional';

import React from 'react';
import { TemplateWrapper } from './TemplateWrapper';

const ResumeTemplates = ({ onClick }) => {
    return (
        <Box
            sx={(theme) => ({
                '& > .MuiBox-root': {
                    height: '760px',
                    [theme.breakpoints.down(600)]: {
                        height: '550px',
                    },
                    [theme.breakpoints.down(450)]: {
                        height: '400px',
                    },
                    [theme.breakpoints.down(350)]: {
                        height: '250px',
                    },
                },
            })}
            id="resume-template-lists"
        >
            <Box>
                <TemplateWrapper
                    title="Resume for Colledge Graduates"
                    clickAction={() => onClick('COLLEDGE_GRADUATE_TEMPLATE')}
                >
                    <UnstyledTemplateProfessional />
                </TemplateWrapper>
            </Box>
            <Box>
                <TemplateWrapper
                    title="Resume for Working Professionals"
                    clickAction={() => onClick('PROFESSIONAL_TEMPLATE')}
                >
                    <StyledTemplateProfessional />
                </TemplateWrapper>
            </Box>
        </Box>
    );
};
export default ResumeTemplates;
