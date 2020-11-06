import React from 'react';
import {useDispatch} from 'react-redux'
import getSymbolFromCurrency from 'currency-symbol-map'
import {buy,checkout} from '../actions/cart'

const Item = ({value:item,cartItemQty,history}) => {
const dispatch = useDispatch()

    const handleBuy=items=>{
        console.log('quantity');
        console.log(cartItemQty);
        dispatch(buy(item))
    }
    
    const renderPrice=(item)=>{
        const currencySymbol =getSymbolFromCurrency(item.currency)
        return `${currencySymbol} ${item.price}`
    }

    const renderBuyBtn=(item)=>{
        console.log(item);
        return(<button onClick={e=>handleBuy(item)} disabled={!item.canBuy}  className="btn btn-sm btn-dark">buy</button>)
    }

    return (
        <div>

        <div className="row">
            <div className="col-6">
               
               <h5>{item.name}</h5>
               <h6>{renderPrice(item)} </h6>
                {renderBuyBtn(item)} &nbsp; <span className="badge badge-primary">{cartItemQty}</span>

            </div>

        </div>

            
        </div>
    );
};

export default Item;