import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_SHIPPING_METHOD,
    CART_SAVE_TOTAL_PRICE,
} from "../actions/types"

export const cartReducer = (state = { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" }, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ADD_ITEM:
            const item = payload
            const existItem = state.cartItems.find(i => i.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === item.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: payload
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: payload
            }
        case CART_SAVE_SHIPPING_METHOD:
            return {
                ...state,
                shippingMethod: payload
            }
        case CART_SAVE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload
            }
        default:
            return state;
    }
}