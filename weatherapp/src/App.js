import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Input from './Input';

function App() {
  const [term, setTerm] = useState('');
  const handleTerm = (term) => {
    setTerm(term);
  }
  return (
    <div className="App">
      <Input handleTerm={handleTerm} />
      {term !== '' ? <Display term={term} /> : ''}

    </div>
  );
}

export default App;
