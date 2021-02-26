import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Category = ({ categoryName, categoryId }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="category">
            <div className="d-flex px-3">
                <Link to={`/category/${categoryId}`}>
                    <h6 className="p-2"> {categoryName}</h6>
                </Link>
                <h6 className="ml-auto">
                    <i onClick={() => setOpen(!open)}
                        className={open ? "fas fa-chevron-up mt-2" : "fas fa-chevron-down mt-2"}></i>
                </h6>
            </div>
            {open ? <ul className="pl-5 pb-3 mb-0">
                <li>Samsung</li>
                <li>Lenovo</li>
                <li>Dell</li>
                <li>Hp</li>
            </ul> : null}
            <hr className="" style={{ width: "85%", margin: "0px auto 10px auto" }} />
        </div>
    )
}

export default Category
