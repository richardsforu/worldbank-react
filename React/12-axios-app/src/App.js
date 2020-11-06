import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm';
import EmployeeForm from './components/EmployeeForm';
import ProductList from './components/ProductList';
const App = () => {
  return (
    <div className="container">
      
      <h1>Form Demo</h1> <hr/>

      

       <hr/>

       <EmployeeForm/>

       <hr/>

       <ProductList/>


    </div>
  );
};

export default App;