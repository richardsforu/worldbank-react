import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }


    /*
    generateButtons(){
        let {buttons} = this.props;

        
           return buttons.map((btn, index) =>{
                return <span>
                    <button>
                        {btn}
                    </button>
                </span>
            })
            
            
        

    }

    */
    countLables() {
        this.setState({ count: this.state.count + 1 })
        this.props.totalCount(this.props.btnLabel);
    }
    render() {
        return (
            <div>
                <div className="card card-body col-6">
                    <span className="badge badge-warning">{this.state.count}</span>
                    <hr />
                    <button
                        className="btn btn-primary"
                        onClick={e => this.countLables()}
                    >{this.props.btnLabel}
                    </button>
                </div>

                <hr/>
            </div>
        );
    }
}

export default Counter;