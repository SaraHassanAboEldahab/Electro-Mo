import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import { getUserDetails, updateUser } from "../../actions/userActions"
import { USER_UPDATE_RESET } from "../../actions/types"

const UserEditScreen = ({ history, match }) => {

    const userId = match.params.id

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push("/admin/userlist")
        } else {
            if (!user || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }

    }, [user, dispatch, userId, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }

    return (
        <>
            {errorUpdate && <ErrorMessage variant="danger">{errorUpdate}</ErrorMessage>}
            {loadingUpdate && <Loader />}
            <div className="container">
                <h4 className="head mt-5">Edit User</h4>
                <hr className="mb-3" />
                {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                    loading ? <Loader /> :
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <form
                                onSubmit={(e) => submitHandler(e)}
                                className="d-flex flex-column mt-2"
                                style={{ width: "70%" }}
                            >
                                <label className="mt-3 mb-1">Name</label>
                                <input
                                    className="general-input"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="mt-4 mb-1">Email Address</label>
                                <input
                                    className="general-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="form-group form-check mt-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.checked)}
                                    />
                                    <label className="form-check-label" for="exampleCheck1">Is Admin</label>
                                </div>
                                <div className="d-flex my-3">
                                    <button
                                        className="btn btn-info"
                                        type="submit"
                                        style={{ width: "30%", height: "38px" }}
                                    >
                                        Update
                                </button>
                                    <Link to="/admin/userlist" className="btn btn-dark ml-auto">
                                        Go Back
                                    </Link>
                                </div>
                            </form>
                        </div>
                }
            </div>

        </>
    )
}

export default UserEditScreen