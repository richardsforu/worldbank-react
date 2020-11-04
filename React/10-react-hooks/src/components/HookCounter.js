import React, { useState } from 'react';
import { useValidate } from '../components/useValidate';
const HookCounter = ({ name, city }) => {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({ id: 'P001', name: 'Praveen', age: 98 })
    let { f1,f2 } = useValidate();
    function increment() {
        setCount(count + 1)
        f1();
        f2();
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">Using useState hook by {name}  in {city}</div>
                <div className="card-body">
                    <button onClick={() => increment()} className="btn btn-primary">Hit - {count}</button>
                </div>
            </div>

        </div>
    );
};

export default HookCounter;