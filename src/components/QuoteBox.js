import React from 'react';
import Button from './Button';

const QuoteBox = ({ quote, onNewQuote }) => {
  return (
    <div className="quote-box">
      <div className="quote-content">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>
      <div className="quote-actions">
        <Button onClick={onNewQuote} text="Новая цитата" />
      </div>
    </div>
  );
};

export default QuoteBox;