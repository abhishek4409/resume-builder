import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Grid, Typography } from '@mui/material';
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
                minWidth: '15rem',
            }}
        >
            <Grid item xs={6}>
                <Typography variant="h6" fontFamily="Montserrat">
                    {`Resume Title: ${resumeName}`}
                </Typography>
            </Grid>
            <Grid item xs={6} textAlign="end">
                <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={(e) => onDeletePress(uid)}
                    style={{ margin: '0.5rem' }}
                />
                <EditIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => onItemClick(uid)}
                    style={{ margin: '0.5rem' }}
                />
            </Grid>
        </Grid>
    );
};
