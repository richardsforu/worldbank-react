import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/SearchBar';
class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="card">
          <div className="card-header">App Component</div>
          <div className="card-body">

            <SearchBar />

          </div>

        </div>

      </div>
    );
  }
}

export default App;