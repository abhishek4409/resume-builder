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
        document
            ?.getElementById('resume-template-lists')
            ?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        setTab(0);
    };

    const handleSavedTemplateClick = () => {
        setTab(1);
    };

    const onTemplateClick = (templateType) => {
        dispatch({
            type: 'SET_TEMPLATE_TYPE',
            payload: templateType,
        });
        dispatch({
            type: 'LOAD_CLICKED_TEMPLATE',
            payload: templateType,
        });
        navigate('new-resume');
    };

    useEffect(() => {
        dispatch({
            type: 'RESET_RESUME_FORMATTING_STATE',
        });
        dispatch({
            type: 'RESET_FORM_DATA',
        });

        dispatch({
            type: 'CLEAR_TEMPLATE_DATA',
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
