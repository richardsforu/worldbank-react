import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ProductList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/employees')
            .then(response => response.data)
            .then(employees => {
                setEmployees(employees)
            })
    }, [])


    function renderEmployees() {
        return employees.map((employee, index) => {
            return (
                <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.address}</td>
                </tr>
            )
        })
    }

    return (
        <div>

            <h1>List Products</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {renderEmployees()}

                </tbody>
            </table>

        </div>
    );
};

export default ProductList;