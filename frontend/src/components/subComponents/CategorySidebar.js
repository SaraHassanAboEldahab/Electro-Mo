import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const CategorySidebar = ({ productsBrands, categoryName }) => {

    const [open, setOpen] = useState(true)
    const arr = productsBrands.map(item => {
        return [item.brand, item]
    })
    const newArr = new Map(arr)
    const brandsName = [...newArr.values()]

    return (
        <div className="sidebar pt-3">
            <Link to="/categories" className="pl-3 d-flex text-dark">
                <i className="fas fa-chevron-circle-left mt-1 mr-1"></i>
                <h5 className="m-0">Categories</h5>
            </Link>
            <hr style={{ margin: "20px 0px" }} />

            <div className="d-flex px-3">
                <h6 className="p-2"> {categoryName}</h6>
                <h6 className="ml-auto" style={{ transition: "all 0.3s ease" }}>
                    <i onClick={() => setOpen(!open)}
                        className={open ? "fas fa-chevron-down mt-2" : "fas fa-chevron-up mt-2"}
                    >
                    </i>
                </h6>
            </div>
            {open ? <ul style={{ transition: "all 0.3s ease" }} className="pl-5 pb-3 mb-0">
                {brandsName.map((brandName) => (
                    <Link to={`/brand/${brandName.brand}`}>
                        <li style={{ color: "gray", marginBottom: "10px" }}>{brandName.brand}</li>
                    </Link>
                ))
                }
            </ul> : null}
            <hr className="mx-auto" style={{ width: "85%" }} />
        </div>
    )
}

export default CategorySidebar
