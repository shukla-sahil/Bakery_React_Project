import React from 'react'
import './Product.css'
export function Product() {
  return (
<React.Fragment>
{/* <div className='bodyss'> */}
<div className="containerr">
    <br/><br/> 
    <br/><br/>
    <br/><br/>
    {/* <h1 className='product-heading' style={{backgroundColor:"#9A8194;" ,color:"#9A8194",fontFamily: "cursive"}}>Products</h1> */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide mycarousel w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5050">
            <img src="/images/6.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/images/7.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">``
            <img src="/images/4.png" className="d-block w-100" alt="..."/>
          </div> 
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/images/5.png" className="d-block w-100" alt="..."/>
          </div>
           <div className="carousel-item" data-bs-interval="2000">
            <img src="/images/111.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/images/7.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
         <main className="page-content">
          <div className="card">
            <div className="Coontent">
              <h2 className="titles">Strawberries & Brownies</h2>
              <p className="copy">Check out all of these gorgeous!</p>
              <a href="/BakedProduct"><button className="btnn">Book Now</button></a>
            </div>
          </div>
          <div className="card">
            <div className="Coontent">
              <h2 className="titles">Lavender Flourish</h2>
              <p className="copy">Plan your Lavender person a Lavender Birthday with Lavender cake.</p>
              <a href="/BakedProduct"> <button className="btnn">Book Now</button> </a>
            </div>
          </div>
          <div className="card">
            <div className="Coontent">
              <h2 className="titles">Sakura's Touch</h2>
              <p className="copy">It's the dessert you've always dreamed of</p>
              <a href="/BakedProduct"> <button className="btnn">Book Now</button></a>
            </div>
          </div>
          <div className="card">
            <div className="Coontent">
              <h2 className="titles">Explore The macarons</h2>
              <p className="copy">Seriously, straight up, just blast off into outer space of macarons</p>
              <a href="/BakedProduct"> <button className="btnn">Book Now</button></a>
            </div>
          </div>
        </main>
        <div>
    <div class="col">
      <h1 className='product-heading' style={{backgroundColor:"#9A8194;" , color:"#9A8194", fontFamily: "cursive"}}>Featured</h1>
        <div class="cardone card1">
            <a href="/Bakedproduct"><h2>Baked Goodies!</h2></a>
           </div>
        <div class="cardtwo card2">
            <a style={{textDecoration: 'none'}} href='/cakes'><h2>cake & Pastries!</h2></a>
           </div>

    </div>
  </div>

   <br/>
   <br/>
   <div class="row yolo">
        <div class="card-body">
          <h1 class="card-title">Customization Order</h1>
          <p class="card-text">Deliciae specialises in carefully designed custom cakes across West Delhi.

            These include a wide array of 3D cakes designed & customised for every occasion. Choose from a wide range of designs for engagement cakes, kids birthday cakes, anniversary cakes, baby shower cakes, and theme cakes apt for birthdays and corporate events.
            
            Our core focus is on Design & Taste and our aim is to always give you the best cake. Distinct style & unique techniques are used to handcraft a beautiful cake.
            
            Online ordering, payment and doorstep delivery make for a seamless experience.</p>
          {/* <!-- <a href="#" class="btn btn-primary button">Go somewhere</a> --> */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSebHt20dldB2-Up9Ns025ZF845IIeqyJgsSOiBI_SkW6WP0Uw/viewform"><button class="button1">Explore</button></a> 
        </div> 
        </div>
        {/* </div> */}
</React.Fragment>
  )
}

export default Product