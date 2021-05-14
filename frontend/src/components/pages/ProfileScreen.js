import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, updateUserProfile } from "../../actions/userActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import { fetchAllProducts } from "../../actions/productActions"
import FeaturedProducts from "../subComponents/FeaturedProducts"


const ProfileScreen = ({ history }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const allProducts = useSelector((state) => state.allProducts)
    const { loading: l, error: e, products: allProductsList } = allProducts
    useEffect(() => {
        dispatch(fetchAllProducts())
        if (!userInfo) {
            history.push("/login")
        } else {
            if (!user) {
                dispatch(getUserDetails("profile"))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords do not match !!")
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="forms" style={{ width: "85%" }}>
                    <h4 className="head">Your Profile</h4>
                    <hr className="mb-2" />

                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {loading && <Loader />}
                    {success && <ErrorMessage variant="success">Profile Updated</ErrorMessage>}

                    <form onSubmit={submitHandler} className="d-flex flex-column mt-2">
                        <label>Name</label>
                        <input
                            className="general-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email Address</label>
                        <input
                            className="general-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            className="general-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Confirm Password</label>
                        <input
                            className="general-input"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="btn btn-info" type="submit">Update</button>
                    </form>
                </div>
            </div>
            {l ? <Loader /> : e ? <ErrorMessage variant="danger">{error}</ErrorMessage>
                : allProductsList.length > 0 ? (
                    <FeaturedProducts products={allProductsList} />
                ) : null
            }
        </div>
    )
}

export default ProfileScreen
