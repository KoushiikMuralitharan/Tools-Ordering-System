import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Menu from './page/Menu';
import Login from './page/Login';
import NewProduct from './page/NewProduct';
import Signup from './page/Signup';
import Dashboard from './Component/Dashboard';
import CreateProduct from './page/CreateProduct';
import UpdateProduct from './page/UpdateProduct';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='newproduct' element={<NewProduct/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='create' element={<CreateProduct/>}/>
          <Route path='update' element={<UpdateProduct/>}/>

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router ={router}/>
);
