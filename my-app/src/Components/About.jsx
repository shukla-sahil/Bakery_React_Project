import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
export function About() {
  const navigate = useNavigate();
  const HandleClck=()=>{
    navigate('/contact');
  }
  const HandleClick=()=>{
    navigate('/');
  }
  return (
<div className="body-ab">
    <div className="about-section">
    <div className="innerab-container">
        <h1 className="about-heading">About Us</h1>
        <p className="text-ab">
            Cake Bakery creates some of the most intricate,
            delicious and unique pastries and desserts in
            west delhi.  Baked with only the finest
            ingredients (locally sourced when possible), we
            continually strive to meld classic French baking
            techniques with new world twists.  baking fresh,
            Please remember us if you have a special occasion
            planned as we’d love to create a cake or dessert
            tailored to your event. Each dessert is crafted
            with our full attention and creativity and will
            be the talk of your celebration.The Cake family
            looks forward to meeting you soon!
        </p>
        <div className="skills">
            <span className="active-ab">Branches</span>
            <span className='span-ab' onClick={HandleClick}>Home</span>
            <span className='span-ab' onClick={HandleClck}>Contactus</span>
        </div>
    </div>
</div>
</div>
  )
}

export default About