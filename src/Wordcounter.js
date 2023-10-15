// WordCounter.js
import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter-container">
      <h1>Word Counter</h1>
      <textarea
        className="text-input"
        placeholder="Type or paste your text here..."
        onChange={handleTextChange}
        value={text}
      />
      <p className="word-count">Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
