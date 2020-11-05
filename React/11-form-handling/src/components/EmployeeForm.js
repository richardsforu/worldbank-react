import React from 'react';
import { useForm } from "react-hook-form";

function saveEmployee(data) {
    console.log(data);
    // server side code..
}

const EmployeeForm = () => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            <div className="col-6">
                <form autoComplete="off" onSubmit={handleSubmit(saveEmployee)}>
                    <div className="form-group">
                        <label>Employee ID</label>
                        <input ref={register(({ required: true, maxLength: 10 }))} className="form-control" name="id" />
                        {errors.id && errors.id.type === "required" && (
                            <span className="text-danger">Employee is is required</span>
                        )}
                        {errors.id && errors.id.type === "maxLength" && (
                            <span className="text-danger">Max length exceeded</span>
                        )}
                    </div>

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
                        <input ref={register} className="form-control" name="salary" />
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