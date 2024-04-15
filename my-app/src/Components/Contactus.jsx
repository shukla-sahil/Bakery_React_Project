import React, { useRef } from 'react';
import './Contactus.css'
import emailjs from '@emailjs/browser'

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sayh4je', 'template_njdy8ak', form.current, 'c6DPD_SvTZezwRKj3')
      .then((result) => {
          console.log(result.text);
          alert("Your Message has been Sent to Sweet Cakes")
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
<div className="body-con">
    <br />
    <br />
    <div class="container-heading">
    <form  ref={form} onSubmit={sendEmail}>
  
      <label > Name</label>
      <input className='input-contact' type="text" name='user_name' placeholder="Your name.." required />
      <label > Email</label>
      <input  className='w-full border-1 border-black rounded-lg p-3 mb-4' type="email" name="user_email"  placeholder="Your Email.." required />
  
      <label >Area</label>
      <select  name="area">
          <option>West Delhi</option>
        <option >South Delhi</option>
        <option >New Delhi</option>
          <option>North Delhi</option>
          <option>East Delhi</option>
          <option>Central Delhi</option>
         {/* <option value="taiwan">Taiwan</option> */}
      </select>
  
      <label for="subject">Subject</label>
      <textarea name="message" placeholder="Write something.."  style={{height: "200px"}}></textarea>

  
  
        <button className='btn-con' type='submit' value='send'>submit</button>
  
  
    </form>
    </div>
    </div>
  )
}

export default Contactus