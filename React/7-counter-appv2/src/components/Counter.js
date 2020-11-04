import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0
    }


    btnHitCount() {
        this.setState({ counter: this.state.counter + 1 })
    }

    generateButtons() {
        let { buttons } = this.props;

        return buttons.map((btnLabel, index) => {
            return (
                <div className="col-2">
                    <div className="card card-body mt-3">
                        <span className="badge badge-info">{this.state.counter}</span>
                        <hr />
                        <button onClick={e => this.btnHitCount(e)} className="btn btn-primary">{btnLabel}</button>
                    </div>
                </div>
            )
        })

    }
    render() {
        return (
            <div className="row">
                {this.generateButtons()}
            </div>
        );
    }
}

export default Counter;