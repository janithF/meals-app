import React from 'react';
import heroImg from '../../assets/img/hero.jpg';
import heroImg2 from '../../assets/img/hero2.jpg';
import heroImg3 from '../../assets/img/hero3.jpg';
import './hero.scss'

const Hero = () => {

    const goToMenu=()=>{
        console.log('scroll');
        window.scrollTo(0,600);
    }

    return (
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-interval="4000">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={heroImg} alt="First slide" />
                    <div className="carousel-caption d-none d-md-flex">
                        <h5>Choose your favorite meal from our broad selection of available meals</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={heroImg2} alt="Second slide" />
                    <div className="carousel-caption d-none d-md-flex">
                        <h5>Enjoy a delicious lunch or dinner at home</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={heroImg3} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-flex">
                        <h5>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</h5>
                    </div>
                </div>
            <div className="menu-btn-container">
                <button className="menu-btn" onClick={goToMenu}>See Menu</button>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Hero;