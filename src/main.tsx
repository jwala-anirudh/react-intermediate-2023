import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App.tsx';

import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

const domRoot = ReactDOM.createRoot(rootElement);

domRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
