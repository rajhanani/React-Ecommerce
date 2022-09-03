import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"
import { Userdata } from '../redux/actions/action'

export const Profile = () => {
  const [userdata, setuserdata] = useState({})
  
  const getdata = useSelector ( (state)=> state.cartreducer.carts);
  console.log(getdata);

  const ck = getdata[0];
   
useEffect( ()=>{

  const mydata=localStorage.getItem("myuserdata");
  setuserdata(JSON.parse(mydata));

},[]);


const deleteemail =()=>{
 
}


  

  return (

    <div>

     <div className='userdata'>

      <div className='user_img'>
        <img src='https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'></img>
      </div>

      <div className='user_details'>
    <p> <span>Name :</span> {userdata.name}  <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span> </p>

     <p> <span>Email :</span> {userdata.email}  <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash" onClick={deleteemail}></i></span> </p>

     <p> <span>Phone :</span> {userdata.phone}  <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span></p>

     <p> <span>Password :</span> {userdata.password}  <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span> </p> 
     </div>

    </div>
    
    </div>
  )
}
