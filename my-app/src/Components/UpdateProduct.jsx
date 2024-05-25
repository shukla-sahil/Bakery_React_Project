import React, { useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
                console.warn(params)
                let result = await fetch(`https://sweetcakess.onrender.com/product/${params.id}`)
                result = await result.json();
                console.warn(result)
                setName(result.name)
                setPrice(result.price)
                setCategory(result.category)
                setCompany(result.company)
    }

    const updateProduct = async()=>{

          console.warn(name,price,category,company);
          let result = await fetch (`https://sweetcakess.onrender.com/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-type':'Application/json'
            }
          })
          result = await result.json()
           if(result){
             navigate('/')
           }

    } 

    return (

        <div className='update-product'>
            <h1>UPDATE PRODUCT</h1>
            <input type="text" placeholder='Product Name ' className='inputbox'
            onChange={(e)=>setName(e.target.value)} value={name}/>
            

            <input type="text" placeholder='Product Price ' className='inputbox'
            onChange={(e)=>setPrice(e.target.value)} value={price}/>
            

            <input type="text" placeholder='Product Category 'className='inputbox' 
            onChange={(e)=>setCategory(e.target.value)} value={category}/>
            

            <input type="text" placeholder='Product Company ' className='inputbox'
            onChange={(e)=>setCompany(e.target.value)} value={company}/>
             

            <button onClick={updateProduct} className='appButton'>Update Product</button>
        </div>
    )
}

export default UpdateProduct
