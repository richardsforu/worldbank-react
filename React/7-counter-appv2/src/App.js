import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
class App extends Component {

  buttons=[5,10,15,20,-5,-10,-15,-20,98];

  render() {
    return (
      <div className="container">

        <div card className="card">
          <div className="card-header">App</div>
          <div className="card-body">

          <Counter buttons={this.buttons}/>

          </div>
        </div>

        
      </div>
    );
  }
}

export default App;