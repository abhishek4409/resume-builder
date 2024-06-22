import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { defaultTheme } from './theme';
import HomeScreen from './components/home-screen';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumeEditorScreen from './components/resume-editor-screen';

const theme = createTheme(defaultTheme);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" Component={HomeScreen} />
                            <Route
                                path="/new-resume"
                                Component={ResumeEditorScreen}
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
