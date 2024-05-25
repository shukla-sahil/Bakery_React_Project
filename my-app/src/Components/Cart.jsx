import React, { useState, useEffect } from 'react';
import './Cart.css'; 
import toast  from 'react-hot-toast';

function ProductCartList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const auth = localStorage.getItem('user')
        const apiURL = (`https://sweetcakess.onrender.com/cart?userId=${JSON.parse(auth)._id}`);
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const getCartData = async () => {
        const auth = localStorage.getItem('user')
        if(auth){
            let result = await fetch(`https://sweetcakess.onrender.com/cart?userId=${JSON.parse(auth)._id}`)
            result = await result.json();
            localStorage.setItem("cartCount",JSON.stringify(result.length));
            setProducts(result)
        }
    }

    const removeItem = async (product) => {
        const auth = localStorage.getItem('user')
        console.log(auth);
        // setCartItems([...cartItems, product]);
        if(auth){
            let result = await fetch("https://sweetcakess.onrender.com/add-to-cart", {
                method:'post',
                body:JSON.stringify({productId:product._id,userId:JSON.parse(auth)._id,addToCart:0}),
                headers:{
                  'content-type':'application/json'
                }
          });
          getCartData();
          result = await result.json();
          console.log("re",result);
        }
        toast.success(`${product.name} removed from cart successfully.`);
    //   console.warn(result);
        // window.location.href = "/cart";
    };
    // Function to calculate total price
    function calculateTotal(products) {
        if(products?.length){
            return products.reduce((total, product) => {
                return total + (product.price * (product.quantity || 1));
            }, 0);
        }
        else{
            return 0;
        }
        
    }

    const totalPrice = calculateTotal(products);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-list-container" style={{marginTop:"7%"}}>
            <h1>Cart Product List</h1>
            <ul className="product-list">
                {
                    products?.length ?
                products.map(product => (
                    <li key={product.id}>
                        <div style={{display:"flex"}}>
                        <button title='Remove from cart' className="flex items-center justify-center p-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => removeItem(product)}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
            </svg>
        </button>
                        <span className="product-name" style={{marginLeft:"5px",marginTop:"2px"}}>{product.name}</span>
                        
                        </div>
                        <span className="product-price" style={{marginTop:"-16px"}}>₹{product.price}</span>
                        {/* <button onClick={() => removeItem(product)}>-</button> */}
                        
                    </li>
                ))
                :
                <p style={{textAlign:"center",fontSize:"18px"}}>No items added in the cart</p>
                }
            </ul>
            {
                                    products?.length ?
                                    <>
                                    <div className="total-price">
                                    Total:  ₹{totalPrice.toFixed(2)}
                                </div>
                                <button className="total-price">
                                   Checkout
                                </button>
                                </>
                                : null
            }
           
        </div>
    );
}

export default ProductCartList;

