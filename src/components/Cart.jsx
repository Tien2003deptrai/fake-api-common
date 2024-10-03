import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = useMemo(() => {
        return cart.reduce((accumulator, item) => accumulator + item.price, 0);
    }, [cart]);

    // useEffect : []

    return (
        <div className="Cart">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
