import React, { useState } from 'react';
import QuoteBox from './components/QuoteBox';
import { quotes } from './data/quotes';

function App() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Генератор случайных цитат</h1>
        <QuoteBox 
          quote={currentQuote} 
          onNewQuote={handleNewQuote}
        />
      </div>
    </div>
  );
}

export default App;