import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from '../reducers/template';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { formattingReducer } from '../reducers/formatting';
import { alertReducer } from '../reducers/alert';
import { savedResumeReducer } from '../reducers/savedResume';
import { templateTypeReducer } from '../reducers/templateType';

const persistConfig = {
    key: 'root',
    storage,
};

const rootPersistReducer = persistCombineReducers(persistConfig, {
    templateReducer,
    formattingReducer,
    alertReducer,
    savedResumeReducer,
    templateTypeReducer,
});

export const store = configureStore({
    reducer: rootPersistReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
