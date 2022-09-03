import React from 'react'
import { useState } from 'react';
import "./Placeorder.css"

export const Placeorder = () => {
    const [buyer, setbuyer] = useState({
        name:"",
        email:'',
        phone:'',
        city:'',
        address:''

    })

    let name,value;

    const handleuser=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setbuyer({...buyer,[name]:value})
       
    } 

    const placeorder=()=>{
  if(buyer.name!=""&& buyer.email!="" && buyer.phone!=""&& buyer.city!=="",buyer.address!="") {

document.getElementById("main").style.display="none" 
document.getElementById("place_address").style.display="block" 

        }else{
           alert("All fileds are required")
        }

    }

  return (
    <div>

<div id='main'>

<div className='sign'>
    <h2>Order Details</h2>
</div>

<div className='form'>
    
    <input type="text" className='input_filed' placeholder='Enter Name' value={buyer.name} name='name' onChange={handleuser}></input><br></br>
    <input type="text" className='input_filed' placeholder='Enter Email' value={buyer.email} name='email' onChange={handleuser} ></input><br></br>
    <input type="number" className='input_filed' placeholder='Enter Number' value={buyer.phone} name='phone' onChange={handleuser} ></input><br></br>

    <input type="text" className='input_filed' placeholder='Enter City' value={buyer.city} name='city' onChange={handleuser} ></input><br></br>

    <textarea className='address' value={buyer.address}  onChange={handleuser} placeholder="Enter Address..."  type="text" name='address'></textarea>
    

    <button type='submit' className='btn-primary' onClick={placeorder}>Send</button><br></br>

</div>



</div>

<div id='place_address'>
<p> Name : {buyer.name}</p>
<p> Email : {buyer.email}</p>
<p> Phone : {buyer.phone}</p>
<p> City : {buyer.city}</p>
<p> Address : {buyer.address}</p>
<p className='conform'>Order Placed Successfully.....</p>
</div>



    </div>
  )
}
