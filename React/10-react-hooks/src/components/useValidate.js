import React from 'react';

export const useValidate = () => {

    function f1(){
       console.log(">>> f1 of useValidate");
    }

    function f2(){
        console.log(">>> f2 of useValidate");
     }
    
     return(
         {f1:f1,f2:f2}
     )
};

