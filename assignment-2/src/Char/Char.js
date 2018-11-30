import React from 'react';
import './Char.css';

const Char = ({ letter, clicked }) => (
  <div className="Char" onClick={event => clicked(event)}>
    {letter}
  </div>
);

export default Char;
