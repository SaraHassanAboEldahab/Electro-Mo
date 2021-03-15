import axios from "axios"
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_SHIPPING_METHOD,
    CART_SAVE_TOTAL_PRICE,
    LIKE_ADD_ITEM,
    LIKE_REMOVE_ITEM
} from "./types"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    //save cart items in local storage and convert it into string because only strings are stored in local storage
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const saveShippingMethod = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_SHIPPING_METHOD,
        payload: data
    })
}

export const saveTotalPrice = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_TOTAL_PRICE,
        payload: data
    })
}

export const savePaymentMethod = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}



export const addToLikes = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: LIKE_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock
        }
    })
    //save cart items in local storage and convert it into string because only strings are stored in local storage
    localStorage.setItem("likeItems", JSON.stringify(getState().like.likeItems))
}

export const removeFromLikes = (id) => async (dispatch, getState) => {

    dispatch({
        type: LIKE_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem("likeItems", JSON.stringify(getState().like.likeItems))
}