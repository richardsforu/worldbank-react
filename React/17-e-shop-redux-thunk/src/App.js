import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import CartView from './components/CartView';


const App = () => {
  return (
    <div className="container">

      <Router>
        <Navbar title="e-shop" />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" render={props => <ItemList {...props} />} />
          <Route path="/cart" render={props => <CartView {...props} />} />

        </Switch>





      </Router>



    </div>
  );
};

export default App;