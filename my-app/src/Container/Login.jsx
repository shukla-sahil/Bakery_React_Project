import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  './Login.css'
import jwt_decode from "jwt-decode"
import toast  from 'react-hot-toast';

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const showToast = (message) => {
      toast.success(message, {
        style: {
          fontSize: '18px', // adjust the font size here
        },
        duration: 5050, // adjust the duration (in milliseconds) here
      });
    };
    const showToastError = (message) => {
      toast.error(message, {
        style: {
          fontSize: '18px', // adjust the font size here
        },
        duration: 50000, // adjust the duration (in milliseconds) here
      });
    };
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        localStorage.setItem("ert","qwerty");

        console.log(auth);
        if(auth)
        {
          navigate('/')
        } 
      },[])   
      
    const handleLogin = async()=>{
        let result = await fetch("https://sweetcakess.onrender.com/login", {
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'content-type':'application/json'
          }
        
    });
   let  resultData = await result.json();
    console.warn(result);
    // localStorage.setItem("user",JSON.stringify(result))
    // navigate('/')
    if(resultData?.name){
        localStorage.setItem("user",JSON.stringify(resultData));
        getCartData();
        // setTimeout(()=>{
        // },8000)
        showToast(`Login succesfull`);
    }
    else{
        // alert("please enter correct details!!!")
        showToastError(`Login Unsuccesfull`);
    }

}
const getCartData = async () => {
  const auth = localStorage.getItem('user')
  if(auth){
      let result = await fetch(`https://sweetcakess.onrender.com/cart?userId=${JSON.parse(auth)._id}`)
      result = await result.json();
      localStorage.setItem("cartCount",JSON.stringify(result.length));
      navigate('/')

  }
}
// const[user,setuser]=useState({})
// function handleCallbackResponse(response)
// {
// console.log("Encoded JWT ID token"+response.credential)
// var userObject=jwt_decode(response.credential)
// console.log(userObject)
// setuser(userObject)
// document.getElementById("signInDiv").hidden=true
// }
// function handleSignOut(event)
// {
//   setuser({})
//   document.getElementById("signInDiv").hidden=false

// }
// useEffect(()=>
// {/*global google*/
// google.accounts.id.initialize({
//   client_id:"1035531980750-77qmhlntflidkepqherf2o2k0g7biphl.apps.googleusercontent.com",
//   callback: handleCallbackResponse
// })
// google.accounts.id.renderButton(
//   document.getElementById("signInDiv"),
//   {theme:"outline",size:"large"}
// )
// google.accounts.id.prompt()
// },[])
//if we have no user : signin button
//if we have a user :show log out button
  return (
<div>
<div className='Border-box'>
    <div class="containers body" id="container">
        <div class="form-container log-in-container">
            <div className='login-form' >
                <h1 className='login-heading'>Login</h1>
                <br />
                
                {/* <div class="social-container">
                     <a className='login-header' href="#" class="fa fa-facebook"></a>
                     <a className='login-header' href="#" class="fa fa-twitter"></a>
                     <a className='login-header' href="#" class="fa fa-google"></a> 
                </div> */}
                {/* <div id='signInDiv'></div>
                {
                  Object.keys(user).length!=0 &&
                
                <button onClick={(e)=>handleSignOut(e)}>sign out</button>
                  }
                {
                  user &&
                  <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                  </div>
                } */}
                <span>or use your account</span> 
                <input className='login-input' type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input className='login-input' type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} value={password} />
                {/* <br> */}
              <span>  <a className='login-header' href="#">Forgot your password?</a>  |  <a className='login-header' href="/register">New Sign Up?</a> </span> 
               <br></br>
                <button className='login-button' onClick={handleLogin}>Log In</button>
            </div>
        </div>
        <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Sweet Cake</h1>
                                <p>Bite me!</p>
                            </div>
                        </div>
                    </div>
        </div>
    </div> 
    </div>      
  )
}
