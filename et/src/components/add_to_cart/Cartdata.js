import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./Cartdata.css"
import { add,inc,dic,buy, remove } from '../redux/actions/action'
import { useNavigate } from 'react-router-dom';




export const Cartdata = () => {
    const [price, setprice] = useState(0)
    const [totalprice, settotalprice] = useState(0)
    const [qt, setqt] = useState(1)
    
  
    console.log(price)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getdata = useSelector ( (state)=> state.cartreducer.carts);
    console.log(getdata)

const total =()=>{
    let price = 0;
    let qt =1;
    
    
    getdata.map ( (element,k)=>{
        
      price = element.price +price;
      qt = element.qunty+qt

    })

       setprice(price)
       setqt(qt)
      
}

const {totalPrice,totalquntity}=getdata.reduce(
(agg,cur)=>{
  
  const TP= cur.qunty*cur.price
  agg.totalPrice+=TP
  agg.totalquntity+=cur.qunty
  return agg
},{totalPrice:0,totalquntity:0}

)


// const send =(e)=>{
//   console.log("Hiii hello mmmmmmmmmmmmm")
//  dispatch(add(e))
  
// }

const send=(e)=>{
  console.log("Hiii hello mmmmmmmmmmmmm")
  dispatch(inc(e))
}

const min=(e)=>{
  dispatch(dic(e))
}

useEffect ( ()=>{
    total()

},[total])


const buyed=(e)=>{
  dispatch(buy(e))
}

const deletecart = (id)=>{
  dispatch(remove(id))
}

const finalproduct=()=>{
     navigate('/buyproduct')
}

  


    


  return (
    <div>
{
      getdata.map( (ele)=>{
      
        return (
  
 <div className='product_main'>

 <div className='product_img'>
 <img src={ele.image}></img>
 </div>

 <div className='product_details'>

 <h6>{ele.title}</h6>
 

 <button onClick={()=>send(ele)}>+</button>
  <span className='qty'>{ele.qunty}</span>
  <button onClick={()=>min(ele)}>-</button>


  <h5>Price :-{ele.price*ele.qunty}</h5> 
<button className='watch'><NavLink to={`/cartitem/${ele.id}`}>watch Item</NavLink></button>

{/* <button className='bg-success' onClick={()=>{ buyed(ele)} }>Buy</button> */}

<button className='bg-danger' onClick={()=>{ deletecart(ele.id) }}>Remove</button>
</div>

</div>
        )
      })
}

<div className='total_main'>

  <div className='total_prize'>
 Total :-{totalPrice} ₹
</div>

<div className='final'>
<button className='bg-warning text-white' onClick={finalproduct}>Final Product</button>
</div>

</div>


    </div>
  )
}
