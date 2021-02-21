import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../actions/userActions"
import ErrorMessage from "./ErrorMessage"
import Loader from "./Loader"
const RegisterForms = ({ history, location }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)


    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const redirect = location.search ? location.search.split("=")[1] : "/"

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords do not match !!")
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <div className="col-md-5">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loader />}
            <h4 className="head">Create New Account</h4>
            <hr className="mb-2" />
            <span>Create your own Account</span>
            <form onSubmit={(e) => submitHandler(e)} className="d-flex flex-column mt-2">
                <label>Name</label>
                <input
                    className="general-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email Address*</label>
                <input
                    className="general-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password*</label>
                <input
                    className="general-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password*</label>
                <input
                    className="general-input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="btn btn-info" type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForms
