import React, { Component } from 'react';

class Greet extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Greet Component</div>
                    <div className="card-body text-center">
                        <h2>Message: {this.props.msg}</h2>
                    </div>

                </div>

            </div>
        );
    }
}

export default Greet;