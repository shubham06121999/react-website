// EmailContext.js
import React, { createContext } from 'react';

import { apiClient } from '../utils/axios';

export const EmailContext = createContext(null);

export const EmailProvider = ({ children }) => {
  const sendEmail = async (formData) => {
    try {
      const response = await apiClient.post('/v1/api/Emailer', formData);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; 
    }
  };

  return (
    <EmailContext.Provider value={{ sendEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
