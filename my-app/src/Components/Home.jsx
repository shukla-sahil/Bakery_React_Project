import React from 'react'
import Footer from '../Container/Footer'
import emailjs from '@emailjs/browser';
import e from 'cors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import toast  from 'react-hot-toast';
// import {usestate} from "react"
// import db from "./firebase"
// import firebase from 'firebase/compat/app'
function Home() {
    const [email, setEmail] = useState("");
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate(); 
    useEffect(() => {
        getReviews();
    }, [])

    const getReviews = async () => {
        let result = await fetch("https://sweetcakess.onrender.com/show-reviews")
        result = await result.json()
        setReviews(result)
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sayh4je', 'template_7v97qy9', e.target, 'c6DPD_SvTZezwRKj3')
            .then((result) => { 
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const subscibeNewsLetter = async () => {
        let result = await fetch("https://sweetcakess.onrender.com/subscribe", {
            method: 'post',
            body: JSON.stringify({ email }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        if (result.statusCode == 422) {
            alert("Already subscribed")
        }
        else {
            alert("Successfully subscribed for newsletter")
        }
    }
    const HandleClick =()=>{
         navigate('/BakedProduct')
    }
    return (<>
        <section class="home" id="home">
            <div class="homeContent">
                <h2>Delicious Cake for Everyone </h2>
                <p>Bakers wake up in the early morning in the hopes of giving people a better day, and that’s all we really care about.</p>
                <br />
                <p>— John Kraus, Chef</p>
                <div class="home-btn">
                    <a href="/BakedProduct"><button>see more</button></a>
                </div>
            </div>
        </section>
        <section class="product" id="product">
            <div class="heading">
                <h2>Our Exclusive Products</h2>
            </div>
            <div class="swiper product-row">
                <div class="swiper-wrapper">
                    <div class="swiper-slide box">
                        <div class="img" style={{ borderRadius: "50%" }}>
                            <img src="images/ex1.png" alt="" />
                        </div>
                        <div class="product-content">
                            <h3>Cup Cake</h3>
                            <p>You can’t buy happiness but u can buy cupcakes.
                            </p>
                            <div class="orderNow">
                                <button onClick={HandleClick}>Order Now </button>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide box">
                        <div class="img">
                            <img src="images/ex2.png" alt="" />
                        </div>
                        <div class="product-content">
                            <h3>Cake</h3>
                            <p>Cake for you, you’ll be happy and funky.

                            </p>
                            <div class="orderNow">
                                <button onClick={HandleClick}>Order Now </button>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide box">
                        <div class="img">
                            <img src="images/ex3.png" alt="" />
                        </div>
                        <div class="product-content">
                            <h3>Donuts</h3>
                            <p>Make it, bake it, buy it.
                            </p>
                            <div class="orderNow">
                                <button onClick={HandleClick}>Order Now </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="blogs" id="blogs">

            <div class=" swiper blogs-row">
                <div class="swiper-wrapper">
                    <div class=" swiper-slide box">
                        <div class="img">
                            <img src="images/blog-img1.png" alt="" />
                        </div>
                        <div class="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                            <p>For the frosting I used my favorite caramel sauce, but you could certainly use a different one. Just keep in mind that not all caramel sauces are the same consistency, so if yours is thinner you might want to use a little less than I did so you don’t thin out your frosting too much.</p>
                            <p>I also used a bit of vanilla bean paste in the frosting to bring out a little more of the vanilla flavor and add some fun specks to the frosting. There’s not a ton of it, but you could certainly add to it if you like.</p>
                            <a href="#blogs" class="btn">learn more</a>
                        </div>
                    </div>
                    <div class=" swiper-slide box">
                        <div class="img">
                            <img src="images/blog-img2.png" alt="" />
                        </div>
                        <div class="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                            <p>For the frosting I used my favorite caramel sauce, but you could certainly use a different one. Just keep in mind that not all caramel sauces are the same consistency, so if yours is thinner you might want to use a little less than I did so you don’t thin out your frosting too much.</p>
                            <p>I also used a bit of vanilla bean paste in the frosting to bring out a little more of the vanilla flavor and add some fun specks to the frosting. There’s not a ton of it, but you could certainly add to it if you like.</p>
                            <a href="#blogs" class="btn">learn more</a>
                        </div>
                    </div>
                    <div class=" swiper-slide box">
                        <div class="img">
                            <img src="images/blog-img2.png" alt="" />
                        </div>
                        <div class="content">
                            <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                            <p>For the frosting I used my favorite caramel sauce, but you could certainly use a different one. Just keep in mind that not all caramel sauces are the same consistency, so if yours is thinner you might want to use a little less than I did so you don’t thin out your frosting too much.</p>
                            <p>I also used a bit of vanilla bean paste in the frosting to bring out a little more of the vanilla flavor and add some fun specks to the frosting. There’s not a ton of it, but you could certainly add to it if you like.</p>
                            <a href="#blogs" class="btn">learn more</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>


            </div>
        </section><br></br>
        <section class="newsletter">
            <form>
                <h3>subscribe for latest update</h3>
                <input type="email" name="" placeholder="enter your email" id="" class="box" onChange={(e) => setEmail(e.target.value)} />
                <input type="submit" value="subscribe" class="box2" onClick={subscibeNewsLetter} />
            </form>
            {/* {message &&  <alert>{message}</alert>} */}
        </section>

        <section className="review" id="review">
            <div className="heading">
                <h2>Customer's Review</h2>
            </div>


            <div className=" swiper review-row">
                <div className="swiper-wrapper">
                    <div className="swiper-slide box">
                        <div className="client-review">
                            <p>"Sweet Cakes provided the wedding cake and dessert bar for our wedding, and we could not have been happier with them. From the first consultation and throughout the entire process, everyone at Sweet Cakes was friendly, knowledgable, and helpful."</p>
                        </div>
                        <div className="client-info">
                            <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyae3zIXrOzkArip5LgxG_xIG-UJbG5F-XlXAJqiaHZERTlREx94f-l64J-Bldapay_CE&usqp=CAU" alt="" />
                            </div>
                            <div className="clientDetailed">
                                <h3>Mukul Sharma</h3>
                                <p>Best Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide box">
                        <div className="client-review">
                            <p>Love love love! This is my second time ordering, and again, very satisfied! I purchased a birthday cake for my daughter, and all my guests loved the cake! The chocolate cake was moist and perfectly sweetened!Thanks!!</p>
                        </div>
                        <div className="client-info">
                            <div className="img">
                                <img src="https://i.pinimg.com/originals/51/4a/39/514a39d1b37834bc413c5d64e60ea1d7.jpg" alt="" />
                            </div>
                            <div className="clientDetailed">
                                <h3>piyush Gupta</h3>
                                <p>Loyal Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide box">
                        <div className="client-review">
                            <p>I came here originally to get a few vegan cupcakes for a friend and ended up falling in love with this place. Would always recommend the s’mores, to live for! The Blueberry strawberry is also spectacular. Thank you very much. </p>
                        </div>
                        <div className="client-info">
                            <div className="img">
                                <img src="https://i.pinimg.com/736x/2d/1b/37/2d1b37f5f19d0f0670a7f923f2441dad.jpg" alt="" />
                            </div>
                            <div className="clientDetailed">
                                <h3>Harsh Umak</h3>
                                <p>Honest Customer</p>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>

                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    {reviews.map((data, key) => (
        <div key={key} className="flex flex-col ml-16 mb-8 items-center bg-[#DEB6AB] rounded-3xl p-12 shadow-lg">
            <p className="text-4xl text-center text-gray-800 mb-4">"{data.message}"</p>
            <div className="text-center">
                <h3 className="text-3xl text-center font-semibold"> - {data.name}</h3>
            </div>
        </div>
    ))}
</div>

        </section>
        <Footer />
    </>


    )
}

export default Home