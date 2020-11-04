import React from 'react';
import {useValidate} from '../components/useValidate';

const Person = () => {

    let{f1,f2}=useValidate();
    return (
        <div>
            <button onClick={()=>f1()}>Function 1</button>
            <button onClick={()=>f2()}>Function 2</button>

        </div>
    );
};

export default Person;