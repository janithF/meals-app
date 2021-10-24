import React from 'react'
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Items from './components/Items/Items';

function App() {
  return(
    <>
      <Modal />
      <Header/> 
      <Hero/>
      <Items/>
    </>
  )
}

export default App;
