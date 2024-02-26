import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import MetaTags from '../components/MetaTags';

const NotFoundPage = () => {
  const { textColorClass } = useContext(ThemeContext);

  return (
    <div className={`container h-full ${textColorClass}`}>
      <MetaTags
        title='Page Not Found - Hungry Chef'
        description="Oops! The page you're looking for cannot be found. Explore Hungry Chef for recipes, cooking tips, and culinary inspiration."
      />

      <h1 className='mx-auto p-2' style={{ width: '400px' }}>
        404: Page Not Found
      </h1>
    </div>
  );
};
export default NotFoundPage;
