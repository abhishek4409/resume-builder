import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export const SavedResumeListItems = ({
    resumeName,
    key,
    uid,
    onDeletePress,
    onItemClick,
}) => {
    return (
        <Grid
            key={key}
            container
            sx={{
                border: 'solid 1px',
                borderColor: 'primary.main',
                margin: '1rem',
                borderRadius: '1rem',
                padding: '1rem',
            }}
            onClick={() => onItemClick(uid)}
        >
            <Grid item xs={6}>
                <Typography variant="h6" fontFamily="Montserrat">
                    {`Resume Title: ${resumeName}`}
                </Typography>
            </Grid>
            <Grid item xs={6} textAlign="end">
                <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={(e) => onDeletePress(e, uid)}
                />
            </Grid>
        </Grid>
    );
};
