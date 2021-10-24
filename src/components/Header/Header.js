import React, { useContext, useEffect, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import AppContext from '../../store/app-context';
import './header.scss'
const Header = () => {

    const {openCart,cartItems} = useContext(AppContext);
    
    const [isAmountChanged,setIsAmountChanged]=useState(false);

    const numberOfCartItems = cartItems.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)

    useEffect(()=>{
        if(cartItems.length === 0){
            return
        }
        setIsAmountChanged(true)
        const identifier = setTimeout(()=>{
            setIsAmountChanged(false)
        },300)

        return()=>{
            clearTimeout(identifier)
        }
    },[cartItems])

    return (
        <header className="sticky-top">
            <h2>Meals</h2>
            <div className={`app-cart ${isAmountChanged && 'bump'}`} onClick={openCart}>
                <div className='icon-container'>
                    <BsFillCartFill className='icon' />
                    <h3>Cart</h3>
                </div>
                <p className="cart-amount">{numberOfCartItems}</p>
            </div>
        </header>
    );
};

export default Header;