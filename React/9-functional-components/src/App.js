import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './Greet';
import Product from './Product';
import Food from './Food';
function App() {
  return (
    <div className="container">
      <h1>Functional APP Component</h1>
      <hr />
      <Greet />
      <hr />
      <Product />
      <hr />
      <Food />
    </div>
  )

}
export default App;