import { useState} from 'react';
import axios from 'axios';
import Accordian from './Components/Accordian';
import Input from './Components/Input';
import './App.css';
import Wikipedia from './Components/Wikipedia';

const elements = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
]

function App() {
  const [term, setTerm] = useState('');
  const handleSearch = (searchTerm) => {
    setTerm(searchTerm)
  }
  return (
    <div className="App">
      {/* <Accordian data = {elements}/> */}
      <Input handleSearch={handleSearch} />
      <Wikipedia searchTerm={term} />
    </div>
  );
}

export default App;
