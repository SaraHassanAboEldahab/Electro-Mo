import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetails, updateProduct } from "../../actions/productActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import { PRODUCT_UPDATE_RESET } from "../../actions/types"
const ProductEditScreen = ({ history, match }) => {

    const productId = match.params.id

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState(10)
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

    const categories = [
        "Computers & Laptops",
        " Mobiles",
        "electronic devices",
        "Electronics"
    ]
    //const checked = categories.find(cat => cat === category)
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push("/admin/productlist")
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(fetchProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }

    }, [productId, product, history, dispatch, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                category,
                brand,
                image,
                countInStock,
                description
            }))
    }

    return (
        <div className="container">
            {loadingUpdate && <Loader />}
            {errorUpdate && <ErrorMessage>{errorUpdate}</ErrorMessage>}
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> : (
                    <>
                        <h3 className="head" style={{ marginTop: "70px" }}> Update Product</h3>
                        <hr className="mb-5" />
                        <form
                            onSubmit={(e) => submitHandler(e)}
                            style={{ width: "70%" }}
                            className="forms d-flex flex-column mt-2 mx-auto"
                        >
                            <label>Name</label>
                            <input
                                className="general-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Price</label>
                            <input
                                className="general-input"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <label>Image</label>
                            <input
                                className="general-input"
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <label>Brand</label>
                            <input
                                className="general-input"
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            <label>Count In Stock</label>
                            <input
                                className="general-input"
                                type="number"
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            />
                            <label>Choose Category</label>
                            {categories.map((cat) => (
                                <div className="form-check mb-3">
                                    <input
                                        className="ml-3 form-check-input"
                                        type="radio"
                                        name="category"
                                        id="category"
                                        value={cat}
                                        checked={category === cat}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label className="ml-5 span-styling form-check-label mt-0">{cat}</label>
                                </div>
                            ))}
                            <label>Write Description</label>
                            <textarea
                                className="general-input"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="5"
                            >
                            </textarea>
                            <button className="btn btn-info" type="submit">Edit</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default ProductEditScreen

