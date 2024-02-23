import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../hooks/themeContext';

import { subscribeContext } from '../hooks/subscribeContext';
import SubscribeForm from './SubscribeForm';

const Subscribe = () => {
  const { isSubscribed, toggleSubscribe } = useContext(subscribeContext);
  const { bgColorClass, textColorClass } = useContext(ThemeContext);
  const subscribeRef = useRef(null);

  const subscribeStyle = {
    transform: isSubscribed ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };

  useEffect(() => {
    if (isSubscribed) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubscribed]);

  const handleClickOutside = (event) => {
    if (subscribeRef.current && !subscribeRef.current.contains(event.target)) {
      toggleSubscribe();
    }
  };

  return (
    <div
      ref={subscribeRef}
      className={`position-fixed shadow end-0 ${bgColorClass} ${textColorClass}`}
      style={{ ...subscribeStyle, zIndex: 1050 }}
      role='complementary'
      aria-label='Subscription Form'
    >
      <SubscribeForm />
    </div>
  );
};
export default Subscribe;
