import React from 'react';

const CopyrightText = ({ companyName }) => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
      &copy; {currentYear}, {companyName}. All Rights Reserved.
    </div>
  );
};

export default CopyrightText;
