import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        let { count } = this.state;

        return (
            <div>

                <div>
                    <h1>React JS Hooks Demo</h1>
                </div>
            <hr/>
                <div className="card">
                    <div className="card-header">Using Class Component APP</div>
                    <div className="card-body">
                        <button onClick={e => this.increment(e)} className="btn btn-primary">Hit - {count}</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClassCounter;