import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProduct } from "../../actions/productActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import { PRODUCT_CREATE_RESET } from "../../actions/types"
const ProductCreateScreen = ({ history }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState("")
    const [newCategory, setNewCategory] = useState("")

    const dispatch = useDispatch()

    const productCreate = useSelector(state => state.productCreate)
    const { loading, error, success } = productCreate

    const categories = [
        "Computers & Laptops",
        " Mobiles",
        "electronic devices",
        "Electronics"
    ]
    //const checked = categories.find(cat => cat === category)
    useEffect(() => {
        if (success) {
            dispatch({ type: PRODUCT_CREATE_RESET })
            history.push("/admin/productlist")
        }

    }, [history, dispatch, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProduct({
                name,
                price,
                category,
                brand,
                image,
                countInStock,
                description
            }))
    }
    const addCategoryHandler = (cat) => {
        return [...categories, cat]
    }

    return (
        <div className="container">
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> : (
                    <>
                        <h3 className="head" style={{ marginTop: "70px" }}> Create Product</h3>
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
                                        className="form-check-input ml-3"
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
                            <button className="btn btn-info" type="submit">Create</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default ProductCreateScreen

