import React, { useState, useEffect } from 'react';
const HookCounter = ({ name, city }) => {

    const [count, setCount] = useState(0);
    const [evenNo, setEvenCount] = useState(0)
    // const [person, setPerson] = useState({ id: 'P001', name: 'Praveen', age: 98 })


    useEffect(() => {
        console.log('----> only once after construction of component');
    }, []) // componentDidMount()


    useEffect(() => {
        console.log('----> Every state change');
    }) // componentDidUpdate(prevProps, prevState, snapshot)


    useEffect(() => {
        console.log('----> Change of Even no ....' + evenNo);
    }, [evenNo])

    useEffect(() => {
        console.log('----> change of count ....' + count);
    }, [count])



    function increment() {
        setCount(count + 1)

    }

    function evenNoGen() {
        setEvenCount(evenNo + 2)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">Using useState hook by {name}  in {city}</div>
                <div className="card-body">
                    <button onClick={() => increment()} className="btn btn-primary">Hit - {count}</button>
                    <hr />
                    <button onClick={() => evenNoGen()} className="btn btn-primary">Even No - {evenNo}</button>

                </div>
            </div>

        </div>
    );
};

export default HookCounter;