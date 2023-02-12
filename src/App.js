import './App.css';
import Navbar from './Components/Navbar';
import MainRouter from './Components/ReactRouter/MainRouter';
//import { useEffect } from 'react';
//import CartContextProvider from './contexts/CartContext/CartContext';
//import ProductContextProvider from './contexts/productContext/ProductContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRouter />
    </div>
  );
}

export default App;
