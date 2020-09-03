import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { ConsiderateProvider } from './context/ConsiderateContext';

ReactDOM.render(
  <BrowserRouter>
    <ConsiderateProvider>
      <App />
    </ConsiderateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
