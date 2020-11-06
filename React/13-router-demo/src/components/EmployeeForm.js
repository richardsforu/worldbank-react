import React from 'react';
import { useForm } from "react-hook-form";

import axios from "axios";


const EmployeeForm = ({history}) => {
    const { register, handleSubmit, errors } = useForm();

function saveEmployee(data) {
    console.log(data);
    axios.post('http://localhost:3000/api/employees', data)
        .then(response => response.data)
        .then(employee => {
            history.push("/list")

        }).catch((error) => {
            console.log(error)
        });
    // server side code..


}

    return (
        <div>
            <div className="col-6">
                <form autoComplete="off" onSubmit={handleSubmit(saveEmployee)}>
                   
                      

                    <div className="form-group">
                        <label>Employee Name</label>
                        <input ref={register(({ required: true, maxLength: 20 }))} className="form-control" name="name" />

                        {errors.name && errors.name.type === "required" && (
                            <span className="text-danger">Name is required</span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                            <span className="text-danger">Max length exceeded</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Salary</label>
                        <input type="number" ref={register} className="form-control" name="salary" />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input ref={register} className="form-control" name="address" />
                    </div>

                    <div className="form-group text-center">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default EmployeeForm;