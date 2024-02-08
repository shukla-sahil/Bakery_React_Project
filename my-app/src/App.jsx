//import logo from './logo.svg';
//import './App.css';
import  Home from'./Components/Home'
import About from'./Components/About'
import Contactus from'./Components/Contactus'
import Header from './Container/Header'
import Product from './Components/Product'
import Review from './Components/Review'
import Footer from './Container/Footer'
import { BakedProduct } from './Components/BakedProduct'
import  {Login}  from './Container/Login'
import  {Register}  from './Container/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {} from './theme'


function App() {

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
<Route exact path ='/review' element ={<Review/>}/>
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
