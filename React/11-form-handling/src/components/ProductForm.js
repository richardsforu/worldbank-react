import React, { useState, useEffect } from 'react';

const ProductForm = () => {

    let [product, setProduct] = useState(
        {
            id:'',
            name:'',
            price:'',
            description:''
        })

    let handleSubmit = (e) => {

        e.preventDefault();
        console.log('-- submited..');
       // console.log(e.target);
       console.log(product);
       
    }

    const handleChange = (e) => {
        //console.log(e.target);
        let name=e.target.name;
        let value=e.target.value;
       // let {name,value}=e.target;
        setProduct({...product,[name]:value});

    }

    return (
        <div>
            <div className="col-6">
                <form autoComplete="off">
                    <div className="form-group">
                        <label>Product ID</label>
                        <input onChange={e => handleChange(e)} className="form-control" name="id" />
                    </div>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input onChange={e => handleChange(e)} className="form-control" name="name" />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input  onChange={e => handleChange(e)} className="form-control" name="price" />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input onChange={e => handleChange(e)} className="form-control" name="description" />
                    </div>
                    

                    <div className="form-group text-center">
                        <button onClick={e => handleSubmit(e)} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProductForm;