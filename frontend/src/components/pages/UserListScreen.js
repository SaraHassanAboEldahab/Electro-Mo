import React, { useEffect } from 'react'
import { Button, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { usersList } from "../../actions/userActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"


const UserListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, users, error } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(usersList())
        } else {
            history.push("/login")
        }
    }, [dispatch, history])

    const deleteHandler = () => {
        console.log("delete")
    }

    return (
        <div className="container">
            <h4 className="head">All Users</h4>
            <hr className="mb-2" />
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> :
                    <Table striped bordered hover responsive className="table-sm" style={{ marginTop: "40px" }}>
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">NAME</th>
                                <th className="text-center">EMAIL</th>
                                <th className="text-center">ADMIN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="text-center">{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        {user.isAdmin ?
                                            <i className="fas fa-check" style={{ color: "green" }}></i> :
                                            <i className="fas fa-times" style={{ color: "red" }}></i>
                                        }
                                    </td>

                                    <td className="text-center">
                                        <LinkContainer to={`/admin/user/${user._id}`}>
                                            <Button className="btn-sm" variant="info">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button className="btn-sm ml-3" variant="danger" onClick={deleteHandler(user._id)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            }
        </div>
    )
}

export default UserListScreen
