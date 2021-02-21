import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetails, createProductReview } from "../../actions/productActions"
import { Link } from "react-router-dom"
import ErrorMessage from '../subComponents/ErrorMessage'
import Loader from '../subComponents/Loader'
import { PRODUCT_CREATE_REVIEW_RESET } from "../../actions/types"


//components importing
import Rating from "../subComponents/Rating"

const ProductDetails = ({ match, history }) => {


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")


    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { error: errorReview, success } = productReviewCreate


    useEffect(() => {
        if (success) {
            alert("Review is submitted")
            setName("")
            setEmail("")
            setRating(0)
            setComment("")
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
        dispatch(fetchProductDetails(match.params.id))
    }, [dispatch, match, success])

    const addToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(match.params.id, {
            rating,
            comment
        }))
    }
    return (
        <div className="container">
            {loading ? <Loader /> : error ? <ErrorMessage /> :
                (<>
                    <div className="row product-details mx-0">
                        <div className="col-lg-6">
                            <img src={product.image} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><h4 className="text-info">{product.name}</h4></li>
                                    <li className="list-group-item">
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="text-info">
                                            {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                        </h5>
                                    </li>
                                    {product.countInStock > 0 && (
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-6"><h5 className="text-info">Quantity</h5></div>
                                                <div className="col-6">
                                                    <select
                                                        style={{ width: "70%" }}
                                                        className=" general-input"
                                                        aria-label="Default select example"
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                    <li className="list-group-item d-flex">
                                        <h5 className="text-info mr-2">Price: {" "}</h5>
                                       ${product.price}
                                    </li>
                                    <li className="list-group-item text-center">
                                        <button
                                            onClick={addToCart}
                                            className="btn btn-info add"
                                            type="button"
                                            disabled={product.countInStock === 0}>
                                            Add To Cart
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4" />
                    <div className="row mx-0">
                        <div>
                            <h5 className="text-info">Description:</h5>
                            <p style={{ width: "60%" }}>{product.description}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <h5 className="mb-4 text-info">Customers Reviews</h5>
                        {errorReview && <ErrorMessage variant="danger">{errorReview}</ErrorMessage>}
                        {userInfo ? <div className="d-flex mb-5">
                            <Rating /> <span>Based on {product.reviews.length} reviews</span>
                            <button
                                onClick={() => setShow(!show)}
                                className="btn btn-info ml-auto"
                                type="button"
                            >
                                Write Review
                            </button>
                        </div> :
                            <ErrorMessage variant="info">
                                Please <Link to="/login">Login</Link>
                            </ErrorMessage>}

                        {product.reviews.length === 0 && <ErrorMessage>No Reviews</ErrorMessage>}
                        {show && (
                            <form style={{ width: "100%" }} onSubmit={(e) => submitHandler(e)} className="d-flex flex-column mt-2">
                                <div className="d-flex mb-4">
                                    <label className="mr-4">Name</label>
                                    <input
                                        style={{ width: "50%" }}
                                        className="general-input mb4"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex mb-4">
                                    <label className="mr-4">Email</label>
                                    <input
                                        style={{ width: "50%" }}
                                        className="general-input"
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex mb-4">
                                    <label className="mr-3">Rating</label>
                                    <select
                                        style={{ width: "50%" }}
                                        className=" general-input"
                                        aria-label="Default select example"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>
                                </div>
                                <div className="d-flex mb-4">
                                    <label className="mr-3">Review</label>
                                    <textarea
                                        style={{ width: "50%" }}
                                        className="general-input"
                                        type="text"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        rows="5"
                                    >
                                    </textarea>
                                </div>
                                <button style={{ width: "20%", marginLeft: "7%" }} className="btn btn-info mb-5" type="submit">Submit Review</button>
                            </form>
                        )}
                        <hr />
                        {product.reviews.map(review => (
                            <>
                                <h4 className="text-dark mb-0">{review.name}</h4>
                                <span style={{ color: "gray" }}>{review.createdAt.substring(0, 10)}</span>
                                <div className="d-flex mt-2">
                                    <p>{review.comment}</p>
                                    <div className="ml-auto">
                                        <Rating value={review.rating} />
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                </>)
            }
        </div >
    )
}

export default ProductDetails