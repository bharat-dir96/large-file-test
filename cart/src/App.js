import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Reg from './Reg';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import { ContextApi } from './Contextapi';
import AdminProduct from './AdminProduct';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import MyOrders from './MyOrders';


function App() {
  const[cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
  // localStorage.setItem('cart',JSON.stringify(cart))
  //Ab is localstorage m value baar baar save krnai hai to ,wo kb hogi add cart k click means dependency then we use USEEFFECT
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  //Common components Router k ander
  const[loginname,setLoginname]=useState(localStorage.getItem('loginname'))

  return (
    <Router>
      {/* Ab kisi bhi components m use kr skte thats whys after Router i write this */}
    <ContextApi.Provider value={{loginname,setLoginname,cart,setCart}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/adminproduct" element={<AdminProduct/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/updateproduct/:id" element={<UpdateProduct/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
      </Routes>
      </ContextApi.Provider>
      <Footer/>
      
    </Router>
    
  )
}

export default App;
