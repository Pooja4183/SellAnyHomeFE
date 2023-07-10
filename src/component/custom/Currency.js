import React from 'react';

const Currency = ({ value, hideSymbol }) => {
  const formatterOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  if (!hideSymbol) {
    formatterOptions.style = 'currency';
    formatterOptions.currency = 'AED';
  }

  const formatter = new Intl.NumberFormat('en-US', formatterOptions);
  const formattedValue = formatter.format(value);

  return <span>{formattedValue}</span>;
};

export default Currency;
