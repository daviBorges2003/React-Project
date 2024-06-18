import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './templates/home/App';
import Periodos from './templates/Periodos/Periodos';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './context/themeContext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/periodos/:id" element={<Periodos />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
