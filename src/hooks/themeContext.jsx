import { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode((prevState) => !prevState);
  }

  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';

  return (
    <ThemeContext.Provider value={{ darkMode, bgColorClass, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
