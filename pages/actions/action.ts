import {ADD_TO_WISHLIST} from '../constant'
export const addToWishlist =(data: any)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_WISHLIST,
        data:data
    }
}