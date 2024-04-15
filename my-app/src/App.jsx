//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import  Home from'./Components/Home'
import About from'./Components/About'
import Contactus from'./Components/Contactus'
import Header from './Container/Header'
import Product from './Components/Product'
import Profile from './Components/Profile'
import Review from './Components/Review'
import Footer from './Container/Footer'
import Blog from './Components/Blog'
import { BakedProduct } from './Components/BakedProduct'
import './index.css'
import { Toaster } from "react-hot-toast";
import  {Login}  from './Container/Login'
import  {Register}  from './Container/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {} from './theme'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>

<Routes>
<Route exact path ='/' element ={<Home/>}/>
<Route exact path ='/product' element ={<Product/>}/>
<Route exact path ='/about' element ={<About/>}/>
<Route exact path ='/contact' element ={<Contactus/>}/>
<Route exact path ='/bakedproduct' element ={<BakedProduct/>}/>
<Route exact path ='/cart' element ={<Cart />}/>
<Route exact path ='/review' element ={<Review/>}/>
<Route exact path ='/blogs' element ={<Blog/>}/>
<Route exact path ='/profile' element ={<Profile/>}/>
{/* <Route exact path ='/admin-product' element ={<ProductList/>}/> */}
{/* <Route exact path ='/update/:id' element ={<UpdateProduct/>}/> */}
<Route exact path ='/login' element ={<Login/>}/>
<Route exact path ='/register' element ={<Register/>}/>
</Routes>

<Toaster/>
</BrowserRouter>
</div>
  
  )   
}

export default App;
