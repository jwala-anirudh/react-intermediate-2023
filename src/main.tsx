import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App.tsx';

import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

const domRoot = ReactDOM.createRoot(rootElement);

/**
const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_000, // 5 mins
      staleTime: 10 * 1000, // 10s
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});  */

const reactQueryClient = new QueryClient();

domRoot.render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
