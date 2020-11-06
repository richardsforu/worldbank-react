import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from './actions/items';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import CartView from './components/CartView';


const App = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadItems('ele', 2))
  }, [])

  function loadItemss() {

    return items.map((item, idx) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td><button class="btn btn-primary">Buy</button></td>
        </tr>
      )
    })

  }


  return (
    <div className="container">


      <Router>


        <Navbar title="e-shop" />
        <hr />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/items" render={props =><ItemList {...props}/>}/>
          <Route  path="/cart" render={props =><CartView {...props}/>}/>

        </Switch>





      </Router>



    </div>
  );
};

export default App;