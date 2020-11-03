import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet';

class App extends Component {
  state = {
    message: '',
    name:'Prtaveen',
    age:76,
    person:{
      id:101,
      name:'Pname',
      age:98
    }
  }

  greetMessage(msg) {
    this.setState({ message: msg });
  }
  render() {
    return (
      <div className="container mt-3">

        <div className="card">
          <div className="card-header">App Component</div>
          <div className="card-body text-center">
            <button onClick={e=>this.greetMessage('Good Morning')} className="btn btn-primary">Good Morning</button>
            <button onClick={e=>this.greetMessage('Good Afternoon')} className="btn btn-primary">Good Afternoon</button>
            <button onClick={e=>this.greetMessage('Good Evening')} className="btn btn-primary">Good Evening</button>

          </div>

        </div>

        <hr/>

        <Greet msg={this.state.message} />
        
      </div>
    );
  }
}

export default App;