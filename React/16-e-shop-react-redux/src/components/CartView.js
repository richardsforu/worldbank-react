import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buy, checkout } from '../actions/cart'



const CartView = ({ history }) => {
    const cart = useSelector(state => state.cart)
    console.log('.. cart ');
    console.log(cart);
    const dispatch = useDispatch()

    if (Object.keys(cart).length === 0) {
        return (
            <div>Cart is empty</div>
        )
    }
    const handleBuy = (item, qty) => {
        dispatch(buy(item, qty))
    }

    const renderCartItems = (cart) => {
        let keys = Object.keys(cart)
        return keys.map(key => {
            let cartLine = cart[key]
            let { item, qty } = cartLine
            console.log('renderCartItems: ' + qty);
            return (
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        <span onClick={e => handleBuy(item, -1)} className="badge badge-dark">
                            <i className="fa fa-minus"></i>
                        </span>
                        <span className=" pl-2 pr-2">{qty}</span>

                        <span onClick={e => handleBuy(item, 1)} className="badge badge-dark">
                            <i className="fa fa-plus"></i>
                        </span>

                    </td>

                    <td>&#8377;{item.price * qty}</td>


                </tr>
            )
        })

    }

    return (
        <div>

            <div className="card card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default CartView;