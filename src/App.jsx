
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Welcome from './components/Welcome'
import Cart from './components/Cart'
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from './components/Footer'



const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Welcome/>}/>
        <Route exact path ="/catalogue" element={<ItemListContainer/>}/>
        <Route exact path ="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path ="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path ="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App


