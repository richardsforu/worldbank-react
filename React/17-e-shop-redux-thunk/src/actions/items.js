import itemsOperations from '../api/items'
export function loadItems(type,size) {
   
    return function (dispatch){
        itemsOperations.getItems()
        .then(response =>{
            dispatch({type:'LOAD_ITEMS',items:response.data})
        })
    }
   /* //.....
    let items =[
        {id:1,name:'Laptop',price:100000, currency:'INR',canBuy:true,description:'New Mac Book Pro',image:'images/Laptop.png'},
        {id:2,name:'Mobile',price:35000,currency:'INR',canBuy:true,description:'Samsung S9 Plus',image:'images/Mobile.png'}
    ]
    return {type:'LOAD_ITEMS',items}

    */
}