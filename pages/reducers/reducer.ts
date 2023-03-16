import { ADD_TO_WISHLIST } from '../constant'
const initialState = {
    wishlistData: []
}
export default function wishItems(state = initialState, action: { type: any; data: any }) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            // console.warn("reducer",action)
            return [
                ...state,
                {wishlistData: action.data}
            ]
        default:
            return state
    }


}