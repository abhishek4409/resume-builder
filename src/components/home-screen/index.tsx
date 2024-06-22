import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { HomePage } from './HomePage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const [activeTab, setTab] = useState<number>(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChooseTemplateClick = () => {
        setTab(0);
    };

    const handleSavedTemplateClick = () => {
        setTab(1);
    };

    const onTemplateClick = () => {
        navigate('new-resume');
    };

    useEffect(() => {
        dispatch({
            type: 'RESET_RESUME_FORMATTING_STATE',
        });
        dispatch({
            type: 'RESET_FORM_DATA',
        });
    }, []);

    return (
        <Grid container justifyContent="center" height="100vh" margin="1rem">
            <HomePage
                activeTab={activeTab}
                handleChooseTemplateClick={handleChooseTemplateClick}
                handleSavedTemplateClick={handleSavedTemplateClick}
                onTemplateClick={onTemplateClick}
            />
        </Grid>
    );
};

export default HomeScreen;
