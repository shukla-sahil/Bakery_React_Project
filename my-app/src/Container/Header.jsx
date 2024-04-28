import React from 'react'
import Nav from "../Components/nav"
import Search from "../Components/Search"
import {Link,useNavigate} from 'react-router-dom'
import Cart from '../Components/Cart'
import  './Header.css'

function Header() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  // logout button for loggin out and redirect to signup page for login again
  const logout=()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
  
    <header class="header" >
        <div class="logoContent">
            <a href="/" class="logo"  ><img src="/images/logo.png" alt=""/></a>
            <h1 class="logoName">Sweet Cake </h1>
        </div>
         <Nav  />

        <div class="icon" style={{display:"flex"}}>
            {/* <i class="fas fa-search" id="search"></i> */}
            {/* <Link to='/cart'>
            <i class="fa fa-shopping-cart" ></i>
           <p style={{color:"red",fontSize:"18px"}}>{localStorage.getItem("cartCount")}</p>
            </Link> */}
             <Link to='/cart'>
            <div style={{marginRight:"20%"}}>
            {
              auth ?
              <div className="cart-icon">
              <svg className="cart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.6 12.4a1 1 0 0 0 1 .6h9a1 1 0 0 0 .98-.8l3.37-11.2H1z" />
              </svg>
              {localStorage.getItem("cartCount") > 0 && <span className="item-count">{localStorage.getItem("cartCount")}</span>}
            </div> : null
            }
            </div>
            </Link>
            {
              auth ? (<span style={{marginLeft:"10%"}}> <Link to='/profile'><i class="fa fa-user"></i></Link></span>)
             
              :
              null
            }
            {
              auth ?  <Link onClick={logout}to='/'><span style={{color: "black",
                fontWeight: "600",
                fontSize: "14px"}}>Logout({JSON.parse(auth).name})</span></Link> : <Link to='/login'><i  class="fas fa-sign-in-alt"></i></Link>
            }
            
            <i class="fas fa-bars" id="menu-bar"></i>
        </div>

        <Search/>
    </header>
  )

  
} 

export default Header