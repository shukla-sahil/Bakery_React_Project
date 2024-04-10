import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';


export const BakedProduct = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5050/products")
        result = await result.json()
        setProducts(result)
    }

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
        window.location.href = "/cart";
    };
    return (
        <div className="product-lists" style={{ margin: "5%" }}>
            {/* <h1 style={{marginTop:"5%",textAlign:"center"}}>Product List</h1> */}

            <div className="product-lists">
                {
                    products.map((data, key) => {
                        return (
                            <div key={key} className="productt" style={{background:"#f8f9fa"}}>

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
                                            ⭐
                                        </span>
                                    </div>
                                    <div className="product-pricee">
                                        <del>Price:</del> {data.price}
                                    </div>
                                    {/* <a href="#" class="btn btn-primary">Buy Now</a> */}
                                    <Link to='/cart'>
                                    <button className="btn btn-primary" onClick={() => handleAddToCart(data)}>Add to Cart</button>
                                    </Link>

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