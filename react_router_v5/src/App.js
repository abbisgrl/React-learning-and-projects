import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
const Home = () => {
  return <div><h2>Home</h2></div>
}
const Category = () => {
  return <div><h2>Category</h2></div>
}
const Products = () => {
  return <div><h2>Products</h2></div>
}

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/category'>Category</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/category'><Category /></Route>
        <Route exact path='/products'><Products /></Route>
      </Switch>
    </div>
  );
}

export default App;
