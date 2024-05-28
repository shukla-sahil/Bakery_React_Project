import React, { useEffect } from 'react'
import  './Register.css'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import toast  from 'react-hot-toast';

export const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [password,setPassword]=useState("");
    const [gender,setGender]=useState("");
    const navigate = useNavigate(); 
    

    // useEffect(()=>{
    //     const auth = localStorage.getItem('user')
    //     if(auth)
    //     {
    //       navigate('/login')
    //     } 
    //   },[])    

    const collectData=async()=>{
        console.warn(name,email,password)
        // frontend data into nodejs api and database
        let result = await fetch("https://sweetcakess.onrender.com/register",{
            method:'post',
            body:JSON.stringify({name,email,password,phoneNumber}),
            headers:{
                'content-Type':'application/json'
            }
    })
    result = await result.json();
    if(result.statusCode == 422){

      toast.error(`${result.message}Register Unsuccesfull`);
    }
    else{
      toast.success(`${result.message}Register succesfull`);
      navigate('/login')
    }
    
    // localStorage.setItem("user",JSON.stringify(result))
    //  navigate('/login')
    }

  return (
    <React.Fragment>
        <div className='bodys'>
         <div class="reg-conatiner">
    <div class="title">Registration</div>
    <div class="content ">
      <div>
        <div class="user-details">
          <div class="input-boxs">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div class="input-boxs">
            <span class="details">Email</span>
            <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div class="input-boxs">
            <span class="details">Phone Number</span>
            <input type="number" placeholder="Enter your number" required value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
          </div>
          <div class="input-boxs">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password" requiredvalue={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </div>
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div class="button">
          <button type="button" class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={collectData} value="Register">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}
