import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {
  const [productname,setProductname]= useState();
  const [description,setDescription]= useState();
  const [price,setPrice]= useState();
  const [brandrating,setBrandrating]= useState();
  const [imageUrl,setImageurl]= useState();
  const navigate = useNavigate();
  const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createProduct",{productname,description,price,brandrating,imageUrl})
    .then(result => {
      console.log(result)
      navigate('/dashboard')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <div>CreateProduct</div>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
           <form onSubmit={Submit}>
            <h2>Add product</h2>
            <div className='mb-2'>
              <label htmlFor=''>Product Name</label>
              <input type="text" placeholder='Enter product name' className='form-control'
              onChange={(e) => setProductname(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor=''>Description</label>
              <input type="text" placeholder='Enter product description' className='form-control'
               onChange={(e)=> setDescription(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor=''>Price</label>
              <input type="text" placeholder='Enter product price' className='form-control'
               onChange={(e)=> setPrice(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor=''>Brand Rating</label>
              <input type="text" placeholder='Enter product rating' className='form-control'
               onChange={(e)=> setBrandrating(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor=''>Image Url</label>
              <input type="text" placeholder='Enter product image Url' className='form-control'
              onChange={(e)=>setImageurl(e.target.value)}
              />
            </div>
            <button className='btn btn-success'>Submit</button>
           </form>
        </div>
      </div>
    </>
  )
}

export default CreateProduct