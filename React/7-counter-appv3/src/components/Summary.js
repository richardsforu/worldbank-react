import React, { Component } from 'react';
import Counter from './Counter';

class Summary extends Component {
    render() {
        return (
            <div>
                <h1>Total: {this.props.total}</h1>
            </div>
        );
    }
}
export default Summary;