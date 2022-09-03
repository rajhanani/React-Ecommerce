export const add =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const remove = (id)=>{
    return {
    type : "REMOVE_CART",
    payload:id
    }
}

export const inc =(incitem)=>{
    return{
        type:"INC_ITEM",
        payload:incitem.id
    }
}

export const dic =(dicitem)=>{
    return{
        type:"DIC_ITEM",
        payload:dicitem.id
    }
}

export const buy = (buyitem)=>{
    return {
        type: "BUY_ITEM",
        payload:buyitem
    }
}

export const Userdata = (User)=>{
    return {
        type: "User_ITEM",
        payload:User
    }
}