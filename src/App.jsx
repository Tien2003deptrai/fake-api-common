import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </ProductProvider>
  );
}

export default App;
