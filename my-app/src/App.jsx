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
// import { Cakes } from './Components/Cakes'
import  {Login}  from './Container/Login'
import  {Register}  from './Container/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {} from './theme'
import Cakes from './Components/Cakes'
import Cart from './Components/Cart'


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
<BrowserRouter>
<Header/>

{/* <h1>BAKERY WEBSITE</h1> */}
<Routes>
{/* <Route element = {<PrivateComponents />}> */}
<Route exact path ='/' element ={<Home/>}/>
<Route exact path ='/product' element ={<Product/>}/>
<Route exact path ='/about' element ={<About/>}/>
<Route exact path ='/contact' element ={<Contactus/>}/>
<Route exact path ='/bakedproduct' element ={<BakedProduct/>}/>
<Route exact path ='/cart' element ={<Cart cartItems={cartItems} />}/>
<Route exact path ='/cakes' element ={<Cakes/>}/>
<Route exact path ='/review' element ={<Review/>}/>
<Route exact path ='/blogs' element ={<Blog/>}/>
<Route exact path ='/profile' element ={<Profile/>}/>
{/* <Route exact path ='/login' element ={<Login/>}/> */}
{/* <Route exact path ='/update/:id' element ={<UpdateProduct/>}/>
<Route exact path ='/logout' element ={<h1>Logout components</h1>}/>
<Route exact path ='/profile' element ={<h1>Profile components</h1>}/> */}
{/* <Route exact path ='/Signup' element ={<Signup/>}/> we dont need signup button as private components */}
{/* </Route> */}
{/* <Route exact path ='/Signup' element ={<Signup/>}/> */}

<Route exact path ='/login' element ={<Login/>}/>
<Route exact path ='/register' element ={<Register/>}/>
</Routes>


</BrowserRouter>
</div>
  
  )   
}

export default App;
