
import {createStore,combineReducers} from 'redux'
// step : 1
//-------------
// state
//-------------

const initialState ={ 
    count:100,
}

// step : 2

const countReducer=(state={count:0},action)=>{
    console.log('-- countReducer');

    let {type,value=1}=action
    switch(type){
        case 'INCREMENT':
        return {count:state.count+value}
        case 'DECREMENT':
        return {count:state.count-value}
        default:
        return state
    }
}



const rootReducer=combineReducers(
   {counter:countReducer}
)

export const store=createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
