import React from 'react'

import { Outlet } from 'react-router-dom'
import {Navbar,Footer, SubItemsBox} from './components/index'
import ProductProvider from './context/ProductProvider'


function App() {

  return (
    <ProductProvider>
      <Navbar />
      <SubItemsBox/>
      <Outlet />
      <Footer />
    </ProductProvider>
  )
}

export default App
