import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { store } from './store'
const App = () => {
  let [data, setCount] = useState()

  store.subscribe(() => {
    let count = store.getState().counter.count;
    setCount(count);
    console.log("APP: " + count);
  })

  return (
    <div className="container">
      <h1>Redux Core Demo</h1><hr />

      <h1>{data}</h1>
      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'INCREMENT' })}

      >Increment</button>

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'DECREMENT' })}

      >Decrement</button>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'INCREMENT', value: 5 })}

      >Increment by 5</button>

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'DECREMENT', value: 5 })}

      >Decrement by 5</button>





    </div>
  );
};

export default App;