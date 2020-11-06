import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
const App = () => {
  return (


    <Router>

      <div className="container">

        <div className="alert alert-info text-center">
          <h1>SPA with React Router</h1>
        </div>

        <div className="row">
          <div className="col-3">
            <Navbar/>
          </div>

          <div className="col-9">

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/add" component={EmployeeForm}/>
              <Route  path="/list" component={EmployeeList}/>
            </Switch>

          </div>
        </div>

      </div>
    </Router>


  );
};

export default App;