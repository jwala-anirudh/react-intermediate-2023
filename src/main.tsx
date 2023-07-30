import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App.tsx';

import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

const domRoot = ReactDOM.createRoot(rootElement);

const reactQueryClient = new QueryClient();

domRoot.render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
