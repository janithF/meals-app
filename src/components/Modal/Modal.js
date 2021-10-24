import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../store/app-context';
import Cart from './Cart/Cart'
import { FaTimes } from 'react-icons/fa';
import { IoMdArrowRoundBack} from 'react-icons/io';
import './modal.scss'
import Checkout from './Checkout/Checkout';

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
                        <h3>{isCheckout && <IoMdArrowRoundBack onClick={goToCart} className='back-btn'/>}{isCheckout?'  Checkout':'Your Cart'}</h3>
                        <FaTimes className="close-btn" onClick={closeCart} />
                    </div>
                    
                    {isCheckout?<Checkout/>:<Cart goToCheckout={goToCheckout}/>}
                </div>
            </div>
        </>
    );
};

export default Modal;