import Header from './components/Header';
import { ThemeContext } from './Hooks/themeContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Popup from './components/popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const { darkMode, bgColorClass } = useContext(ThemeContext);

  return (
    <Router>
      <div data-bs-theme={darkMode ? 'dark' : 'light'} className={bgColorClass}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/popup' element={<Popup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
