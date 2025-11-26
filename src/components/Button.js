import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button className="quote-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;