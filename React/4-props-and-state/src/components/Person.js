import React, { Component } from 'react';

class Person extends Component {
    editPerson(e) {
        console.log(e.target.value);
        console.log('---->>> edit person...>>> ');
    }
    cancelData(){
        console.log('>>>>>>> Cancel Data');
    }

    renderData(e){
        if(e.key==="Enter"){
          console.log(e.target.value);  
        }
    }

    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header">{this.props.name}-Bio</div>
                    <div className="card-body">
                        <p>Designation: </p>
                        <p>Qualifecation: </p>
                        <p>Total Experience: </p>
                        <hr />
                        <input onKeyDown={e=>this.renderData(e)} placeholder="Search"/>
                        <hr/>
                        <div className="text-center">
                            <button onClick={e=>this.editPerson(e)} className="btn btn-primary">Edit</button>
                            <button onClick={this.cancelData}  className="btn btn-danger" style={{ margin: "5px" }}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;