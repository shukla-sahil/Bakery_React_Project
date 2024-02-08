import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const BakedProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5050/products")
        result = await result.json()
        setProducts(result)
    }
return(
    <div>
        <h1 style={{marginTop:"5%",textAlign:"center"}}>Product List</h1>
   
   
     <div className='product-list'>
     {/* <h3>Product List</h3> */}
  <div style={{display:"flex",marginLeft:"3%"}}>
  {
             products.map((data, key) => {
                 return (
                    <div key={key} style={{marginLeft:"3%"}}>
                    <div style={{width: "18rem"}}>
                      <img  src="images/cake1.png" alt="Card image cap"/>
                      <div>
                        <h5>Name:{data.name}</h5>
                        <h5>Price:{data.price}/kg</h5>   
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                      </div>
                    </div> 
                  </div>
                 )
             })
         }
  </div>
        
 </div>
 </div>
    )
}