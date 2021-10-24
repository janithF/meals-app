import React from 'react';
import heroImg from '../../assets/img/hero3.jpg';
import Items from '../Items/Items';
import './hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <img src={heroImg} alt="hero" />
            <div className="hero-content">
                <div className="promo">
                    <h2>Delicious Food, Delivered To You</h2>
                    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                    </p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
                <button>See Menu</button>
            </div>
        </div>
    );
};

export default Hero;