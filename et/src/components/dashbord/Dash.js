import React from 'react';
import "./Dash.css";
import {NavLink} from "react-router-dom"
import { useSelector } from 'react-redux';


export const Dash = () => {
  
  const getdata =useSelector( (state)=> state.cartreducer.carts);
  console.log(getdata);

  return (
    <div>
       
       <div className='nav'>
            <ul>
                <h2>Trending</h2>
                <hr></hr>
                {/* <li><NavLink href="#news" to="/profile">Profile</NavLink></li> */}
                {/* <li><NavLink href="#news" to="/">Signup</NavLink></li> */}
                <li><NavLink href="#news" to="/products">All Products</NavLink></li>
                {/* <li><NavLink href="#news" to="/mens">Mens</NavLink></li>
                <li><NavLink href="#news" to="/womens">Womens</NavLink></li>
                <li><NavLink href="#news" to="/jewelery">Jewelery</NavLink></li>
                <li><NavLink href="#news" to="/electronics">Electronics</NavLink></li> */}
                <li><NavLink href="#news" to="/usrprofile">Profile</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
