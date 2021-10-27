import React from 'react'
import Contact from './components/Contact/Contact'
import About from './components/About/About';
import Header from './components/Header/Header'
import {Route,Redirect } from 'react-router-dom';
import Home from './Home';
import Items from './components/Items/Items';

function App() {
  
  return (
    <>
      <Header />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={Home} />
        <Route path='/menu' component={Items} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </>
  )
}

export default App;
