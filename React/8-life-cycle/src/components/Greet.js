import React, { Component } from 'react';

class Greet extends Component {
    constructor(){
        super();
        console.log("==>Greet:: constructor");
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("==>GREET:: componentDidUpdate");
        
        console.log(this.props);
        console.log(prevProps);
      }


      componentWillUnmount(){
          console.log("==>GREET:: componentWillUnmount <<==");
      }


      shouldComponentUpdate(nextProps, nextState){
          console.log("==>GREET:: shouldComponentUpdate");
          return this.props.message!==nextProps.message;
      }


    render() {
        console.log("==>GREET::render()");

        return (
            <div className="card">
                <div className="card-header">Greet Component</div>
                <div className="card-body text-center">
                    <h1>{this.props.message}</h1>
                </div>
            </div>
        );
    }
}

export default Greet;
