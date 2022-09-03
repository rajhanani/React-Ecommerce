import React from 'react'
import { useSelector } from 'react-redux';
import './Buyproduct.css'
import { useNavigate } from 'react-router-dom';

export const Buyproduct = () => {

    const getdata = useSelector ( (state)=> state.cartreducer.carts );
    console.log(getdata)
    console.log(getdata[0].id)

    const navigate=useNavigate()

    const gotoorder =()=>{
      navigate("/placeorder")

    }


  return (
    <div>

{
      getdata.map( (ele)=>{
      
        return (
  
 <div className='cartitem_main'>

 <div className='cartitem_img'>
 <img src={ele.image}></img>
 </div>

 <div className='cartitem_details'>

 <h4>{ele.title}</h4>
 <p>{ele.description}</p>
 

 {/* <button onClick={()=>send(ele)}>+</button>
  <span className='qty'>{ele.qunty}</span>
  <button onClick={()=>min(ele)}>-</button> */}

  <h4>Price :-{ele.price*ele.qunty}</h4>
   
</div>


</div>
        )
      })
}

<button className='bg-success' onClick={gotoorder}>ORDER PLACE</button>
    </div>
  )
}
