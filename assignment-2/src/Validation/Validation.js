import React from 'react';

import './Validation.css';

const Validation = ({ inputLength }) => {
  let message = inputLength < 5 ? 'Text too short' : 'Text long enough';
  return (
    <div className="Validation">
      <span>{message}</span>
    </div>
  );
};

export default Validation;
