import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { add,inc,dic } from "../redux/actions/action";
import './Cartitem.css'

export const Cartitem = () => {
  const [cartitem, setcartitem] = useState([]);

  console.log(cartitem)
  const getdata = useSelector ( (state)=> state.cartreducer.carts);

  const {id} = useParams()

  const compare =()=>{
    let getitem = getdata.filter( (e)=>{
     return e.id==id
    })
    setcartitem(getitem)

  }

  useEffect( ()=>{
    compare();
    
  },[id])

  const dispatch = useDispatch()

  const send=(e)=>{
    dispatch(inc(e))
  }
  
  const min=(e)=>{
    dispatch(dic(e))
  }
  


  return (
    
        <div>
{
  
  cartitem.map ( (element,id)=>{
    console.log(element.qunty)
    return (
      <>
        <div className='cartitem_main'>

    <div className='cartitem_img'>
    <img src={element.image}></img>
     </div>

<div className='cartitem_details'>
    <p>{element.title}</p>
    {/* <p>{element.price}</p> */}
    <p>{element.description}</p>
    <p>Total Price :- {element.price * element.qunty}</p>
    
    {/* <button onClick={()=>send(element)}>+</button>
  <span className='qty'>{element.qunty}</span>
  <button onClick={()=>min(element)}>-</button> */}

</div>

        </div>
        
        </>
        )
        
       } )
}

    </div>
  )
}
