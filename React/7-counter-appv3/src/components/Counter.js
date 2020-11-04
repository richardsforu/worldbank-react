import React, { Component } from 'react';

class Counter extends Component {
  
    state = {
        counter: 0
    }
    countButtonHits() {
        this.setState({ counter: this.state.counter + 1 })
        this.props.calculateTotalCount(this.props.btnLabel); // calls parent function
    }


    render() {
        let cls;
        let { btnLabel } = this.props;

        { btnLabel > 0 ? cls = 'btn btn-success' : cls = 'btn btn-danger' }
        return (
            <div>
               <div className="text-center">
               <span className="badge badge-primary text-center">{this.state.counter}</span>
               </div>
               <hr/>
               <div className="text-center">
               <button onClick={e => this.countButtonHits(e)} className={cls}>{btnLabel}</button>

               </div>
            </div>

        );
    }
}

export default Counter;