import { createContext, useState } from 'react';

export const subscribeContext = createContext();

const SubscribeProvider = ({ children }) => {
  const toggleSubscribe = () => {
    setIsSubscribed((prevIsSubscribed) => !prevIsSubscribed);
  };

  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <subscribeContext.Provider value={{ isSubscribed, toggleSubscribe }}>
      {children}
    </subscribeContext.Provider>
  );
};

export default SubscribeProvider;
