import React from 'react'

const AddToProduct = () => {
    
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [error,setError] = React.useState(false);

    const addproduct = async()=>{

           if(!name || !price || ! category || !company){
            setError(true)
            return false
           }

          console.warn(name,price,category,company)
          const userId = JSON.parse(localStorage.getItem('user'))._id;
          console.warn(userId);
          let result = await fetch("https://sweetcakess.onrender.com/add-Product",{
            method:'post',
            body:JSON.stringify({name,price,category,userId}),
            headers:{
                'content-Type':'application/json'
            }
          });
          result = await result.json();
          console.warn(result);
    } 

    return (

        <div className='product'>
            <h1>ADD TO PRODUCTS</h1>
            <input type="text" placeholder='Product Name ' className='inputbox'
            onChange={(e)=>setName(e.target.value)} value={name}/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Product Price ' className='inputbox'
            onChange={(e)=>setPrice(e.target.value)} value={price}/>
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Product Category 'className='inputbox' 
            onChange={(e)=>setCategory(e.target.value)} value={category}/>
            {error && !category && <span className='invalid-input'>Enter valid category</span>}

            <input type="text" placeholder='Product Description ' className='inputbox'
            onChange={(e)=>setCompany(e.target.value)} value={company}/>
             {error && !company && <span className='invalid-input'>Enter valid company</span>}

            <button onClick={addproduct} className='appButton'>ADD</button>
        </div>
    )
}

export default AddToProduct
