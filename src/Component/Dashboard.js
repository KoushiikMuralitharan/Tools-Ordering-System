import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
const Dashboard = () => {
    const navigate = useNavigate();
    const [suc , setsuc] = useState()
    axios.defaults.withCredentials= true;
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res=>{
             if(res.data === "Success"){
                setsuc("Success")
                
             }else{
                navigate('/')
             }
        }).catch(err => console.log(err))
    },[])
    const [products,setProducts] = useState([]);
    //   ProductName:"power driller",
    //   Description:"an multipurpose tool",
    //   Price: "$100",
    //   BrandRating: "5",
    //   imageUrl: "img1.jpg"
     

    useEffect(()=>{
      // axios.get('http://localhost:3001/products')
      // .then(result => {console.log(result.data) 
      //   setProducts(result.data)})
      // .catch(err => console.log(err))
      axios.get('http://localhost:3001/products')
    .then(result => {
      if (Array.isArray(result.data)) {
        setProducts(result.data);
      } else {
        console.error('Invalid data format:', result.data);
      }
    })
    .catch(err => {
      console.error('Error fetching products:', err);
    });
    },[])
  return (
    <>
    <div>Dashboard</div>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'> Add +</Link>
        <table className='table'>
          <thead>
             <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Brand Rating</th>
              <th>image Url</th>
              <th>Action</th>
             </tr>
          </thead>
          <tbody>
              {
                products.map((product) =>{
                  return <tr>
                    <td>{product.productname}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.brandrating}</td>
                    <td>{product.imageUrl}</td>
                    <td>
                    <Link to="/update" className='btn btn-success'>Edit</Link>
                      <button className='btn btn-danger' >Delete</button>
                      
                    </td>
                  </tr>
                })
              }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Dashboard