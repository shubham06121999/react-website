// useEmail.js
import { useContext } from 'react';

import { EmailContext } from '../contexts/EmailContext';

const useEmail = () => {
  const context = useContext(EmailContext);

  if (!context) {
    throw new Error('EmailContext must be placed within an EmailProvider');
  }

  return context;
};

export default useEmail;
