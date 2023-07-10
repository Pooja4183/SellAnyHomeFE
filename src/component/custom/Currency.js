import React from 'react';

const Currency = ({ value }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
  });
  const formattedValue = formatter.format(value);
  return <span>{formatter.format(value)}</span>;
};

export default Currency;
