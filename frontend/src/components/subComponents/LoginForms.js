import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../actions/userActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
const LoginForms = ({ history, location }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const redirect = location.search ? location.search.split("=")[1] : "/"

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className="col-md-5">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loader />}
            <h3 className="head" style={{}}>Login</h3>
            <hr className="mb-2" />
            <span>Welcome back! Sign in to your account</span>
            <form onSubmit={(e) => submitHandler(e)} className="d-flex flex-column mt-2">
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
                <button className="btn btn-info" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForms
