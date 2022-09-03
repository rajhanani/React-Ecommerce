import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { add } from "../redux/actions/action";



export const Electronics = () => {

   

    const dispatch = useDispatch()

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data)

    let mount = true;


    useEffect(() => {
        const getproduct = async () => {
            const response = await fetch("http://fakestoreapi.com/products");
            if (mount) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                console.log(filter);

               
                
            }

          
            return () => {

                mount = false;
               
               
            }
        }
        getproduct()
        
       
    }, [])
    


    const send =(e)=>{
        // console.log(e)
        dispatch(add(e))
        
    }

    const filterproduct = (cat)=>{
        const updatedlist = filter.filter( (x)=>x.category===cat);
        setfilter(updatedlist)
    }

    setTimeout(filterproduct,1000,"electronics")
        
   

  return (
    <div className='pro'>
{
    filter.map( (element,id)=>{
        return (
            <>
          <div className='main_div'>

            <div className='main_img'>
                <img src={element.image}></img>
            </div>

            <div className='cart_dis'>
            <p>{element.title}</p>
            <p>{element.price}</p>
            </div>

            <div className='bt_cart'>
                <button onClick={()=>{ send(element)}}>Add to Cart</button>
            </div>

          </div>
          </>
        )
 } )
}
    </div>
  )
}
