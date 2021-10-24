import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../store/app-context';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import './cart.scss'

const Cart = (props) => {

    const { cartItems, totalAmount, setCartItems, updateTotalAmount, clearCart } = useContext(AppContext)

    const itemAddHandler = (id, price) => {
        setCartItems(prevItems =>
            prevItems.map(cartItem => {
                if (cartItem.id === id) {
                    return {
                        ...cartItem,
                        amount: cartItem.amount + 1,
                        itemTotal: cartItem.itemTotal + price
                    }
                }
                return cartItem
            })
        )
        updateTotalAmount(price, 'add')
    }

    const removeItem = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(newCartItems);
    }

    const itemRemoveHandler = (id, itemPrice) => {
        setCartItems(prevItems =>
            prevItems.map(cartItem => {
                if (cartItem.id === id) {
                    if (cartItem.amount > 1) {
                        return {
                            ...cartItem,
                            amount: cartItem.amount - 1
                        }
                    } else {
                        removeItem(id)
                    }
                }
                return cartItem
            })
        )
        updateTotalAmount(itemPrice, 'remove');
    }

    useEffect(() => {

    })

    return (
        <>
            {cartItems.length === 0 && <h3>No Added Items</h3>}
            {cartItems.length > 0 &&
                <>
                    <div className="items-container">
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="cart-item">
                                            <div className="food-info">
                                                <h5>{item.name}</h5>
                                                <div className="info-bottom">
                                                    <p>${item.price}</p>
                                                    <p id='amount'>X {item.amount}</p>
                                                </div>
                                            </div>
                                            <div className="change-amount">
                                                <AiFillMinusCircle className='change' onClick={() => itemRemoveHandler(item.id, item.price)} />
                                                <AiFillPlusCircle className='change' onClick={() => itemAddHandler(item.id, item.price)} />
                                            </div>
                                        </div>
                                        <hr className="underline" />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="cart-footer">
                        <h3>Total Amount</h3>
                        <h4>${totalAmount.toFixed(2)}</h4>
                    </div>
                    <div className="btn-container">
                        <button id="cancel" onClick={clearCart}>Cancel</button>
                        <button id="order" onClick={props.goToCheckout}>Go to Checkout</button>
                    </div>
                </>
            }
        </>
    );
};

export default Cart;