import { Box, Typography } from '@mui/material';
import React from 'react';

export const TemplateWrapper = ({ children, title, clickAction }) => {
    return (
        <Box
            onClick={clickAction}
            sx={(theme) => ({
                border: 'solid 1px',
                borderRadius: '1rem',
                borderColor: 'primary.light',
                display: 'flex',
                cursor: 'pointer',
                width: '760px',
                transition: 'transform .2s',
                transform: 'scale(0.75) translate(0%, 0%)',
                '&:hover': {
                    transform: 'scale(0.7556)',
                },
                [theme.breakpoints.down(600)]: {
                    transform: 'scale(0.55) translate(0%, -25%)',
                    '&:hover': {
                        transform: 'scale(0.6) translate(0%, -25%)',
                    },
                },
                [theme.breakpoints.down(450)]: {
                    transform: 'scale(0.4) translate(0%, -60%)',
                    '&:hover': {
                        transform: 'scale(0.45) translate(0%, -60%)',
                    },
                },
                [theme.breakpoints.down(350)]: {
                    transform: 'scale(0.25) translate(0%, -140%)',
                    '&:hover': {
                        transform: 'scale(0.3) translate(0%, -140%)',
                    },
                },
            })}
        >
            <Box sx={{ position: 'absolute', top: '-4rem' }}>
                <Typography
                    variant="h5"
                    fontFamily="Montserrat"
                    fontWeight="700"
                >
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
};
