import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootswatch/dist/journal/bootstrap.min.css';
import SubscribeProvider from './hooks/subscribeContext.jsx';
import ThemeProvider from './hooks/themeContext.jsx';
import FoodProvider from './hooks/foodContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FoodProvider>
        <SubscribeProvider>
          <App />
        </SubscribeProvider>
      </FoodProvider>
    </ThemeProvider>
  </React.StrictMode>
);
