const intialstate ={
    carts:[]
};

export const cartreducer =(state=intialstate,action)=>{

    switch(action.type){

        case "ADD_CART":

       const newdata = action.payload ;
       newdata['qunty']= 0
       console.log(newdata)

       const Itemindex = state.carts.findIndex((item)=>item.id===newdata.id);
       
       console.log(state.carts)
       console.log(newdata)

        if(Itemindex>=0){
        //   state.carts[Itemindex].qunty+=1
        //   console.log(newdata.qunty)
        
        const temp = {...newdata,qunty:1}
        }else{
            const temp = {...newdata,qunty:1}
        
            return {
                ...state,
                carts:[...state.carts,temp]
            }
        }

        case "REMOVE_CART" :
       const rmvcart = state.carts.filter((el)=>el.id!==action.payload);

       return {
        ...state,
        carts:rmvcart
       }
       
            case "INC_ITEM" :
                let plusitem = state.carts.map( (product)=>{
                    if(product.id==action.payload){
                        return{...product, qunty:product.qunty + 1}
                    }
                    return product;
                })
                return{
                    ...state,
                    carts:plusitem
                }

                case "DIC_ITEM" :

                let minusitem = state.carts.map( (product)=>{
                    if(product.id==action.payload){
                        return{...product,qunty:product.qunty-1}
                    }
                    return product;

                })
                return {
                    ...state,carts:minusitem
                }

                case "BUY_ITEM":
                    const buyindex = state.carts.findIndex( (buyitem)=>buyitem.id===action.payload.id)

                    console.log(buyindex)

                    if(buyindex>=0){
                        const pro={...action.payload}
                    }else{
                        const pro={...action.payload}
                        return {
                            carts:[...state.carts,pro]
                            
                        }
                    }

                    case "User_ITEM":
                return  {
                           carts:[action.payload],
                        
                        } 
            default :
            return state
    }

}