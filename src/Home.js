import React, { useEffect } from 'react';
import Modal from './components/Modal/Modal';
import Hero from './components/Hero/Hero'
import Items from './components/Items/Items';
import { Route } from 'react-router';

const Home = () => {


    return (
        <>

            <Modal />
            <Hero />
            <Route path='/home/menu'>
                <Items />
            </Route>
        </>
    );
};

export default Home;