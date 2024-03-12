import React from 'react'

const UpdateProduct = () => {
  return (
    <>
    <div>UpdateProduct</div>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
         <form>
          <h2>Add product</h2>
          <div className='mb-2'>
            <label htmlFor=''>Product Name</label>
            <input type="text" placeholder='Enter product name' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Description</label>
            <input type="text" placeholder='Enter product description' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Price</label>
            <input type="text" placeholder='Enter product price' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Brand Rating</label>
            <input type="text" placeholder='Enter product rating' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Image Url</label>
            <input type="text" placeholder='Enter product image Url' className='form-control'/>
          </div>
          <button className='btn btn-success'>Update</button>
         </form>
      </div>
    </div>
  </>
  )
}

export default UpdateProduct;