import React, { useRef } from 'react';
import './Contactus.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';

function Review() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_sayh4je', 'template_njdy8ak', form.current, 'c6DPD_SvTZezwRKj3')
  //     .then((result) => {
  //         console.log(result.text);
  //         alert("Your Message has been Sent to Sweet Cakes")
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     form.current.reset();
  // };
  const sendReview = async()=>{
    console.warn(name,email,message)
    // frontend data into nodejs api and database
    let result = await fetch("https://sweetcakess.onrender.com/review",{
        method:'post',
        body:JSON.stringify({name,email,message}),
        headers:{
            'content-Type':'application/json'
        }
})
result = await result.json();
console.warn(result);
if(result){
  alert("your review is added")
}
else{
  alert("Retry!!!")
}
// result = await result.json();
// if(result.statusCode == 422){

//   alert(result.message);
// }
// else{
//   alert(result.message);
// }
  }
  
  return (
<div className="body-con">
    <br />
    <br />
    <div class="container-heading">
      <h2 style={{textAlign:'center'}}>Write your valuable reviews</h2>
    {/* <form  ref={form} onSubmit={sendEmail}> */}
    <form onSubmit={sendReview}>
  
      <label > Name</label>
      <input className='input-contact' type="text" name='user_name' placeholder="Your name.." required value={name} onChange={(e)=>setName(e.target.value)}/>
      
      <label > Email</label>
      <input className='w-full border-1 border-black rounded-lg p-3 mb-4' type="email" name="user_email"  placeholder="Your Email.." required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  

  
      {/* <label >Area</label> */}
      {/* <select  name="area">
          <option>West Delhi</option>
        <option >South Delhi</option>
        <option >New Delhi</option>
          <option>North Delhi</option>
          <option>East Delhi</option>
          <option>Central Delhi</option>
      </select> */}
  
      <label for="subject">Subject</label>
      <textarea name="message" placeholder="Write your review.." required style={{height: "200px"}} value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
        <button className='btn-con' type='submit' value='send'>submit</button>
  
  
    </form>
    </div>
    </div>
  )
}

export default Review