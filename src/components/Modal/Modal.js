import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../store/app-context';
import Cart from './Cart/Cart'
import { FaTimes } from 'react-icons/fa';
import { IoMdArrowRoundBack} from 'react-icons/io';
import './modal.scss'
import Checkout from './Checkout/Checkout';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const Modal = () => {

    const { isCartOpen, closeCart } = useContext(AppContext)
    const [isCheckout,setIsCheckout] = useState(false);

    const goToCheckout=()=>{
        setIsCheckout(true);
    }
    const goToCart=()=>{
        setIsCheckout(false);
    }

    return (
        <>  {isCartOpen && <div className="backdrop"></div>}
            <div className={`${isCartOpen ? 'modal show ' : 'modal '}`}>
                <div className="cart-content">
                    <div className="cart-header">
                        <h3>{isCheckout && <Link to='/home/cart'><IoMdArrowRoundBack onClick={goToCart} className='back-btn'/></Link>}{isCheckout?'  Checkout':'Your Cart'}</h3>
                        <Link to='/home/menu'><FaTimes className="close-btn" onClick={()=>{closeCart();setIsCheckout(false)}} /></Link>
                    </div>
                    
                    {isCheckout?<Route path='/home/checkout'><Checkout/></Route>:<Route path='/home/cart'><Cart goToCheckout={goToCheckout}/></Route>}
                </div>
            </div>
        </>
    );
};

export default Modal;