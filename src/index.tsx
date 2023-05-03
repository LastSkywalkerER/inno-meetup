import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from '@/App';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const root = rootElement && ReactDOM.createRoot(rootElement);

const RenderedApp = (
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, RenderedApp);
} else {
  root?.render(RenderedApp);
}

reportWebVitals();
