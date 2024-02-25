import Header from './components/Header';
import { ThemeContext } from './hooks/themeContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import RecipePage from './pages/RecipePage';
import RecipeIndexPage from './pages/RecipeIndexPage';
import Footer from './components/Footer';
import CookieSettingsPage from './pages/CookieSettingsPage';
import HomePage from './pages/HomePage';
import GDPRBanner from './components/GDPRBanner';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Subscribe from './components/Subscribe';

const App = () => {
  const { darkMode, bgColorClass } = useContext(ThemeContext);
  const [showGDPRBanner, setShowGDPRBanner] = useState(false);
  useEffect(() => {
    const cookiesConsent = localStorage.getItem('cookiesEnabled');
    setShowGDPRBanner(cookiesConsent === null);
  }, []);
  return (
    <Router>
      <div data-bs-theme={darkMode ? 'dark' : 'light'} className={bgColorClass}>
      {showGDPRBanner && <GDPRBanner />}
        <Subscribe />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipeIndex' element={<RecipeIndexPage />} />
          <Route path='/recipe/:id' element={<RecipePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='cookesettings' element={<CookieSettingsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
