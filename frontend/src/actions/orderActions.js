import axios from "axios"
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    MY_ORDERS_LIST_REQUEST,
    MY_ORDERS_LIST_SUCCESS,
    MY_ORDERS_LIST_FAIL
} from "./types"

export const createOrder = (order) => async (dispatch, getState) => {

    try {
        dispatch({ type: ORDER_CREATE_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/orders`, order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {

    try {

        dispatch({ type: ORDER_DETAILS_REQUEST })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}


export const getMyOrderList = () => async (dispatch, getState) => {

    try {

        dispatch({ type: MY_ORDERS_LIST_REQUEST })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/myorders`, config)

        dispatch({
            type: MY_ORDERS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MY_ORDERS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}