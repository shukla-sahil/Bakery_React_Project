import React from 'react'

function Footer() {
    return (
        <footer class="footer" id="contact">
            <div class="box-container">
                <div class="mainBox">
                    <div class="content">
                        <a href="#"><img src="images/logo.png" alt="" /></a>
                        <h1 class="logoName"> Sweet Cake </h1>
                    </div>

                    <p>Bakers wake up in the early morning in the hopes of giving people a better day, and that’s all we really care about.
                    </p>

                </div>
                <div class="box">
                    <h3>Quick link</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i>Home</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>product</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>blogs</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>review</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>contact</a>
                    <a href="/about"> <i class="fas fa-arrow-right"></i>About</a>

                </div>
                <div class="box">
                    <h3>Extra link</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i>Account info</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>order item</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>privacy policy</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>payment method</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>our  services</a>
                </div>
                <div class="box">
                    <h3>Contact Info</h3>
                    <a href="#"> <i class="fas fa-phone"></i>+91 9868872290 </a>
                    <a href="#"> <i class="fas fa-envelope"></i>BakeryNand@gmail.com</a>

                </div>

            </div>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
                <a href="#" class="fab fa-pinterest"></a>
            </div>
            <div class="credit">
                Copyright© |all rights reserved !
            </div>
        </footer>

    )
}

export default Footer