import React, { createContext } from 'react';
import { createRoot } from 'react-dom'; // Импорт ReactDOM из react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null);

const root = createRoot(document.getElementById('root'));

root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}
    >
        <App />
    </Context.Provider>
);

reportWebVitals();