import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistConfig, persistor } from './store';
import App from './App';
import crossBrowserListener from './store/utils/reduxpersist-listener';

window.store = store;

window.addEventListener('storage', crossBrowserListener(store, persistConfig));

ReactDOM.render(
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <Router>
                    <App />
                </Router>
            </React.StrictMode>
            </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
