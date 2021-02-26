import {
    CATEGORIES_CREATE_FAIL,
    CATEGORIES_CREATE_REQUEST,
    CATEGORIES_CREATE_SUCCESS,
    FETCH_CATEGORIES_FAIL,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    GET_CATEGORY_FAIL,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS
} from "../actions/types"

export const categoriesListReducer = (state = { categories: [] }, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_CATEGORIES_REQUEST:
            return { loading: true, categories: [] }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case FETCH_CATEGORIES_FAIL:
            return { loading: false, error: payload }
        default:
            return state;
    }
}

export const categoryCreateReducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case CATEGORIES_CREATE_REQUEST:
            return { loading: true }
        case CATEGORIES_CREATE_SUCCESS:
            return { loading: false, success: true, category: payload }
        case CATEGORIES_CREATE_FAIL:
            return { loading: false, error: payload }
        default:
            return state;
    }
}


export const categoryReducer = (state = { category: {} }, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CATEGORY_REQUEST:
            return { loading: true, ...state }
        case GET_CATEGORY_SUCCESS:
            return { loading: false, category: payload }
        case GET_CATEGORY_FAIL:
            return { loading: false, error: payload }
        default:
            return state;
    }
}