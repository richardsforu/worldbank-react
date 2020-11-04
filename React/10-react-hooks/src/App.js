import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import Person from './components/Person';

const App = () => {
  return (
    <div className="container">


      <ClassCounter/>
      
      <hr/>

      <HookCounter name="Ozvitha" city="Hyderabad"/>

      <hr/>
      <Person/>



    </div>
  );
};

export default App;