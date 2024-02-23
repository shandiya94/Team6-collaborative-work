import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';

const NotFoundPage = () => {
  const { textColorClass } = useContext(ThemeContext);

  return (
    <div className={`container h-full ${textColorClass}`}>
      <h1 className='mx-auto p-2' style={{ width: '400px' }}>
        404: Page Not Found
      </h1>
      <p className='text-center'>
    We're sorry, but the page you are looking for might have been removed,
    had its name changed, or is temporarily unavailable.
  </p>
    
    <p className='text-center'>
    <Link to='/' className='text-success'>
      Return to Home
    </Link>
  </p>
  </div>
  );
};
export default NotFoundPage;
