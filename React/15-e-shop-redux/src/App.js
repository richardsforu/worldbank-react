import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './store';
const App = () => {

  store.subscribe(() => {
    let items = store.getState().items;
    console.log("APP: " + items);
  })

  return (
    <div className="container">
      <h1>e-shop app</h1> <hr/>
      <div className="row">

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'LOAD_ITEMS',action:'items' })}

      >Load Items</button>

      </div>
    </div>
  );
};

export default App;