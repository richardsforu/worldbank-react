import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/Person';
class App extends Component {
  render() {
    return (
      <div className="container">
          <h1>Teaching {this.props.title} by {this.props.trainer}</h1> <hr/>
          <div className="card">
            <div className="card-header">App Component</div>
            <div className="card-body">
              <div className="row">
              <Person name="Praveen"/>
              <Person name="Tej"/>
              <Person name="Sai"/>
              </div>
           
            </div>
          </div>
      </div>
    );
  }
}

export default App;