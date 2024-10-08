import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Component/Home'
import Catlog from '../src/utils/Catlog'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import Productpage from './utils/Productpage'
import Account from './utils/Account'
import Cart from './Component/Cart'
import Wish from './Component/Wish'



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <>
    <div className=' bg-[#F4EBDA] overflow-x-hidden  '>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/catlog' element={<Catlog/>} />
       <Route path='/account' element={<Account/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/wishlist' element={<Wish/>} />


       <Route path='/productpage/:id' element={<Productpage/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
