import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import Summary from './components/Summary';
class App extends Component {

  state = {
    total: 0,
    showDiv:false
  }

  buttons = [5, 10, 15, 87, 34];

  generateButtons() {
    return this.buttons.map((btnLabel, idx) => {

      return (

        <div className="col-3">
          <div className="card card-body mt-3">
            <Counter calculateTotalCount={e => this.calculateTotalCount(e)} btnLabel={btnLabel} key={idx} />
          </div>

        </div>

      )
    })

  }

  calculateTotalCount(e) {
    this.setState({ total: this.state.total + e })
  }

  toggleView() {
    this.setState({showDiv:!this.state.showDiv})
  }
 
  render() {
    let {showDiv}=this.state;
    return (
      <div className="container">
        <div hidden={showDiv}>
          <div className="card">
            <div className="card-header">App Component</div>
            <div className="card-body">
              <div className="row">
                {this.generateButtons()}
              </div>

            </div>
            <div className="card-footer text-center">
              <Summary total={this.state.total} />
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <button onClick={e=>this.toggleView(e)} className="btn btn-primary">Show/Hide</button>
          <button disabled={showDiv} className="btn btn-danger">Test</button>
        
        </div>

      </div >
    );
  }
}

export default App;