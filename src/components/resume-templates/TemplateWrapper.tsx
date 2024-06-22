import { Box, Typography } from '@mui/material';
import React from 'react';

export const TemplateWrapper = ({ children, title, clickAction }) => {
    return (
        <Box
            onClick={clickAction}
            sx={{
                border: 'solid 1px',
                borderRadius: '1rem',
                borderColor: 'primary.light',
                transform: 'scale(0.75)',
                display: 'flex',
                cursor: 'pointer',
                transition: 'transform .2s',
                '&:hover': {
                    transform: 'scale(0.8)',
                },
            }}
        >
            <Box sx={{ position: 'absolute', top: '-4rem' }}>
                <Typography variant="h5" fontFamily="Montserrat">
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
};
