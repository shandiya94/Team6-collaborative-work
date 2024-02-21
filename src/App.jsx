import Header from './components/Header';
import { ThemeContext } from './Hooks/themeContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeIndexPage from './pages/RecipeIndexPage';
import RecipePage from './pages/RecipePage';
import HomePage from './pages/HomePage';

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
          <Route path='/RecipeIndexPage' element={<RecipeIndexPage />} />
          <Route path='/RecipePage/:id' element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
