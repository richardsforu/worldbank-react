import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item';
import {loadItems} from '../actions/items'
const ItemList = ({ history }) => {
    const items = useSelector(state => state.items);
    const cart=useSelector(state=>state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        // ...api code.. 
        dispatch(loadItems('ele', 2))
    }, [])

    const renderItems = (items) => {
        return items.map((item => {
            let cartLine = cart[item.id] || {}
            let cartItemQty = cartLine.qty || 0
            return (
                <div key={item.id}>
                    <div className="list-group-item">
                        <Item value={item} cartItemQty={cartItemQty} history={history} />
                    </div>
                </div>
            )
        }))
    }


return (
    <div>

        <div className="list-group">
           {renderItems(items)}
        </div>
    </div>
);
};


export default ItemList;