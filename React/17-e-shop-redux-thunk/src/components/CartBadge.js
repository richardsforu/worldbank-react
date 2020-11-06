
import React from 'react';
import { useSelector } from 'react-redux'

const CartBadge = () => {
    const cart = useSelector(state => state.cart)
    const count = Object.keys(cart).length
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-primary">{count}</span>&nbsp;
            item(s) cart
        </div>
    );
};
export default CartBadge;