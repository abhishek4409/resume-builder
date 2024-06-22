import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from '../reducers/template';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { formattingReducer } from '../reducers/formatting';
import { alertReducer } from '../reducers/alert';
import { savedResumeReducer } from '../reducers/savedResume';

const persistConfig = {
    key: 'root',
    storage,
};
// const ReactReduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__();

const rootPersistReducer = persistCombineReducers(persistConfig, {
    templateReducer,
    formattingReducer,
    alertReducer,
    savedResumeReducer,
});

export const store = configureStore({
    reducer: rootPersistReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
