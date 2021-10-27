import React, { useContext, useEffect, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import AppContext from '../../store/app-context';
import './header.scss'
import Navbar from './Navbar/Navbar';
const Header = () => {

    const { openCart, cartItems } = useContext(AppContext);

    const [isAmountChanged, setIsAmountChanged] = useState(false);

    const numberOfCartItems = cartItems.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    useEffect(() => {
        if (cartItems.length === 0) {
            return
        }
        setIsAmountChanged(true)
        const identifier = setTimeout(() => {
            setIsAmountChanged(false)
        }, 300)

        return () => {
            clearTimeout(identifier)
        }
    }, [cartItems])

    return (
        <header className="sticky-top">
            <h2><Link to='/home'> Meals</Link></h2>
            <Navbar />
            <Link to='/home/cart'>
                <div className={`app-cart ${isAmountChanged && 'bump'}`} onClick={openCart}>
                    <div className='icon-container'>
                        <BsFillCartFill className='icon' />
                        <h3>Cart</h3>
                    </div>
                    <p className="cart-amount">{numberOfCartItems}</p>
                </div>
            </Link>
        </header>
    );
};

export default Header;