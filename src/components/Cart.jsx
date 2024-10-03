import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    return (
        <div className="Cart">
            <h2>Your Cart</h2>

            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
