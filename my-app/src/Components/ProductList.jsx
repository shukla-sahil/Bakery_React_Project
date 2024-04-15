// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ProductList.css';
// const ProductList = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         getProducts();
//     }, [])

//     const getProducts = async () => {
//         let result = await fetch("http://localhost:5050/products")
//         result = await result.json()
//         setProducts(result)
//     }

//     const deleteProduct = async(id)=>{
//         console.warn(id)
//         let result = await fetch(`http://localhost:5050/products/${id}`,{
//             method :"Delete"
//         })
//         result = await result.json();
//         if(result){
//             getProducts();
//         }
//     }
//     // console.warn(products)
//     return (

//         <div className='admin-product-list' style={{marginTop:"10%"}}>
//             <h3>Product List</h3>
//             <div className="admin-product-item">
//                                      <div className="sno">Sno.</div>
//                                      <div className="name">name</div>
//                                      <div className="price">price</div>
//                                      <div className="category">category</div>
//                                      <div className="operation">
//                                        Operation
//                                      </div>
//                                    </div>
            
//                 {
//                     products.map((data, key) => {
//                         return (
//                                      <div className="admin-product-item">
//                                      <div className="admin-sno">{key +1}</div>
//                                      <div className="admin-name">{data.name}</div>
//                                      <div className="admin-price">{data.price}</div>
//                                      <div className="admin-category">{data.category}</div>
//                                      <div className="admin-operation">
//                                        <button className="edit-button" onClick={() =>navigate(`/update/${data._id}`)}>Update</button>
//                                        <button className="delete-button" onClick={()=>deleteProduct(data._id)}>Delete</button>
//                                      </div>
//                                    </div>
//                         )
//                     })
//                 }
            
//         </div>
//     )
// }

// export default ProductList;