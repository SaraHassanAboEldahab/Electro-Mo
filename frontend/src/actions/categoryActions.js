import axios from "axios"
import {
    FETCH_CATEGORIES_FAIL,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    CATEGORIES_CREATE_FAIL,
    CATEGORIES_CREATE_REQUEST,
    CATEGORIES_CREATE_SUCCESS,
    GET_CATEGORY_FAIL,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS
} from "./types"

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORIES_REQUEST })
        const { data } = await axios.get(`/api/categories`)

        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

export const createCategory = (category) => async (dispatch, getState) => {

    try {

        dispatch({ type: CATEGORIES_CREATE_REQUEST })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/categories`, category, config)

        dispatch({
            type: CATEGORIES_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORIES_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}



export const fetchCategoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_CATEGORY_REQUEST })

        const { data } = await axios.get(`/api/categories/${id}`)

        dispatch({
            type: GET_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}