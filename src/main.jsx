import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootswatch/dist/minty/bootstrap.min.css';

import './index.css';

import ThemeProvider from './Hooks/themeContext.jsx';
import FoodProvider from './Hooks/foodContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FoodProvider>
        <App />
      </FoodProvider>
    </ThemeProvider>
  </React.StrictMode>
);
