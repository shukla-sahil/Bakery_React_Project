import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import toast  from 'react-hot-toast';
import './BakedProduct.css'

export const BakedProduct = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        getProducts();
        getCartData();
    }, [])

    const getProducts = async () => {
        let result = await fetch("https://sweetcakess.onrender.com/products")
        result = await result.json()
        setProducts(result)
    }

    const getCartData = async () => {
        const auth = localStorage.getItem('user')
        if(auth){
            let result = await fetch(`https://sweetcakess.onrender.com/cart?userId=${JSON.parse(auth)._id}`)
            result = await result.json();
            localStorage.setItem("cartCount",JSON.stringify(result.length));
            setCartItems(result)
        }
    }

    const handleAddToCart = async (product,flag) => {
        const auth = localStorage.getItem('user')
        console.log(auth);
        // setCartItems([...cartItems, product]);
        if(auth){
            let result = await fetch("https://sweetcakess.onrender.com/add-to-cart", {
                method:'post',
                body:JSON.stringify({productId:product._id,userId:JSON.parse(auth)._id,addToCart:flag}),
                headers:{
                  'content-type':'application/json'
                }
          });
          getCartData();
          result = await result.json();
          console.log("re",result);
        }
        toast.success(`${product.name} Cart Updated`);
    //   console.warn(result);
        // window.location.href = "/cart";
    };
    return (
        <div className="product-lists"style={{ margin: "5%" , justifyContent:"center", fontSize:"25px"}}>
            Products
            
            {/* <h1 style={{marginTop:"5%",textAlign:"center"}}>Product List</h1> */}

            <div className="product-lists">
                {
                    products.map((data, key) => {
                        return (
                            <div key={key} className="productt" style={{background:"#C6A9A3"}}>

                                <div className="product-imagee">
                                <img src={`images/cake${key + 1}.png`}
                                    onError={e => {
                                        e.target.src = 'images/cake1.png';
                                    }} />
                                </div> 
                                <div className="product-infoo">
                                    <div className="product-names">{data.name}</div>
                                    <div className="product-ratingg">
                                        <span role="img" aria-label="star">
                                            ⭐⭐⭐
                                        </span>
                                    </div>
                                    <div className="product-pricee">
                                        <del>Price:</del> {data.price}
                                    </div>
                                    {/* <a href="#" class="btn btn-primary">Buy Now</a> */}
                                    {/* <Link to='/cart'> */}
                                    {
                                       cartItems?.length && cartItems?.find((ele)=> ele._id == data._id) ?
                                        <button className="btn btn-primary" onClick={() => handleAddToCart(data,0)}>Remove from Cart</button>
                                        :
                                        <button className="btn btn-primary" onClick={() => handleAddToCart(data,1)}>Add to Cart</button>

                                    }
                                    {/* </Link> */}

                                    {/* <h5>Name:{data.name}</h5>
                        <h5>Price:{data.price}/kg</h5>   
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                        <a href="#" class="btn btn-primary" style={{marginLeft:"5%"}}>Add to Cart</a> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}