import AddToList from './AddToList';
import '../App.css';
import Products from './Products';

function App() {
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = Products
      break;
    case '/addproduct':
      Component = AddToList
      break;
    default:
      Component = Products
  }
  return (
    <>
      <Component />
    </>
  );
}

export default App;
