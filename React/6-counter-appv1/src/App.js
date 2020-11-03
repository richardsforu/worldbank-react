import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
class App extends Component {

  state = {
    total: 0,
    buttons:[5,10,15,20,-5,-10,15,-20]

  }

  
  totalCount(e) {

    this.setState({ total: this.state.total + e })

  }
  render() {
    return (
      <div className="container">

        <div className="card">
          <div className="card-header">App Component</div>
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <Counter totalCount={e => this.totalCount(e)} btnLabel={10} />
              </div>

              <div className="col-3">
                <Counter totalCount={e => this.totalCount(e)} btnLabel={20} />
              </div>

              <div className="col-3">
                <Counter totalCount={e => this.totalCount(e)} btnLabel={-10} />
              </div>
              <div className="col-3">
                <Counter totalCount={e => this.totalCount(e)} btnLabel={-20} />
              </div>


              <div className="col-3">
                <Counter buttons={this.state.buttons}/>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <h2>Total: {this.state.total}</h2>
          </div>

        </div>


      </div>
    );
  }
}

export default App;