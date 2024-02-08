import React from 'react'
import Nav from "../Components/nav"
import Search from "../Components/Search"
import {Link,useNavigate} from 'react-router-dom'

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

        <div class="icon">
            <i class="fas fa-search" id="search"></i>
            <i class="fa fa-shopping-cart" ></i>
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