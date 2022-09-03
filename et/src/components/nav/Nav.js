import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {           
    const getdata =useSelector( (state)=> state.cartreducer.carts);
    console.log(getdata);

    const navigate= useNavigate()

    const gotologin =()=>{
      navigate('/login')
    }

    const gotosignup=()=>{
      navigate("/gotosignup")
    }


  
  return (
    <div>

<div className='nav_main'>

<div className='nav_img'>
<img src='https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png'></img>
</div>

<div className='star_main'>


<div className='crt_count'>{getdata.length}</div>

<div className='cart'>
 <NavLink to='/carts'><i class="fa-solid fa-cart-arrow-down"></i></NavLink>
</div>

<button className='log' onClick={gotosignup}>Signup</button>


<button className='log' onClick={gotologin}>Login</button>


  </div>

</div>


    </div>
  )
}
