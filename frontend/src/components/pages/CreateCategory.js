import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createCategory } from "../../actions/categoryActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"

const CreateCategory = ({ history }) => {

    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const categoryCreate = useSelector(state => state.categoryCreate)
    const { category, success } = categoryCreate

    useEffect(() => {
        if (success) {
            history.push("/admin/product/create")
        }

    }, [history, dispatch, success])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createCategory({ name }))
    }

    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="d-flex flex-column mb-4">
                <input
                    style={{ width: "40%", height: "50px" }}
                    className="general-input "
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button style={{ width: "40%" }} type="submit" className="btn btn-dark mt-0">Add new Category</button>
            </div>
        </form>
    )
}

export default CreateCategory
