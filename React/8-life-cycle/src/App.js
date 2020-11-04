import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Greet from './components/Greet';
class App extends Component {

  constructor() {
    super();
    console.log("==>APP:: constructor");
  }

  state = {
    message: 'Default Message'
  }


  componentDidMount() {
    console.log("==>APP:: componentDidMount");
    setTimeout(() => {
      let response = "Hello React!";
      this.setState({ message: response })
      console.log(">>>>>>> After 5 Sec");
    }, 5000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("==>APP:: componentDidUpdate");

  }


  greetings(msg) {
    this.setState({ message: msg })
  }

  render() {
    console.log("==>APP::render()");
    return (
      <div className="container">

        <div className="card">
          <div className="card-header">App Component</div>
          <div className="card-body text-center">
            <button onClick={e => this.greetings('Good Morning')} className="btn btn-primary btn-space">Good Morning</button>
            <button onClick={e => this.greetings('Good Afternoon')} className="btn btn-primary btn-space">Good Afternoon</button>
            <button onClick={e => this.greetings('Good Evening')} className="btn btn-primary btn-space">Good Evening</button>
            <button onClick={e => this.greetings('')} className="btn btn-danger btn-space">Remove</button>

          </div>
        </div>

        <hr />
        {this.state.message ? <Greet message={this.state.message} /> : null}
      </div>
    );
  }
}

export default App;