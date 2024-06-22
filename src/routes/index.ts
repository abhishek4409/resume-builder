import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '../App';
import Templates from '../components/resume-editor-screen';
import HomePage from '../components/home-screen';
import Template from '../components/templates/unstyledTemplateA';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    // {
    //     path: '/create-new-resume',
    //     Component: Template,
    // },
]);

export default router;
