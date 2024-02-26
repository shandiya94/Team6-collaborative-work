import { ThemeContext } from './hooks/themeContext';
import { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GDPRBanner from './components/GDPRBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import HomePage from './pages/HomePage';
import CookieSettingsPage from './pages/CookieSettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import RecipePage from './pages/RecipePage';
import RecipeIndexPage from './pages/RecipeIndexPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import AccessibilityStatementPage from './pages/AccessibilityStatementPage';
import FAQPage from './pages/FAQPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const { darkMode, bgColorClass } = useContext(ThemeContext);
  const [showGDPRBanner, setShowGDPRBanner] = useState(false);
  useEffect(() => {
    const cookiesConsent = localStorage.getItem('cookiesEnabled');
    setShowGDPRBanner(!cookiesConsent);
  }, []);
  return (
    <Router>
      <div data-bs-theme={darkMode ? 'dark' : 'light'} className={bgColorClass}>
        {showGDPRBanner && <GDPRBanner />}
        <Subscribe />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipe-index' element={<RecipeIndexPage />} />
          <Route path='/recipe/:id/:name' element={<RecipePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/cookie-settings' element={<CookieSettingsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/contact' element={<AboutUsPage />} />
          <Route
            path='/accessibility-statement'
            element={<AccessibilityStatementPage />}
          />
          <Route path='/faq' element={<FAQPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
