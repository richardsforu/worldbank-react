import {createStore} from 'redux'
import rootReducer from '../reducers'
//import {items} from './actions';

const initialState ={ 
    items:[{ id:1,name:'Laptop',price:100000,canBuy:true,description:'New Mac Book Pro',image:'images/Laptop.png'},
    {id:2,name:'Mobile',price:35000,canBuy:true,description:'Samsung S9 Plus',image:'images/Mobile.png'}
]   

}

export const store=createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store