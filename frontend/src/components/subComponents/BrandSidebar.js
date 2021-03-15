import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const BrandSidebar = ({ productsCategories, categoryName }) => {

  //const [open, setOpen] = useState(true)

  const arr = productsCategories.map(item => {
    return [item.category.name, item]
  })
  const newArr = new Map(arr)
  const categoriesName = [...newArr.values()]

  return (
    <div className="sidebar pt-3">
      <Link to="/categories" className="pl-3 d-flex text-dark">
        <i className="fas fa-chevron-circle-left mt-1 mr-1"></i>
        <h5 className="m-0">Categories</h5>
      </Link>
      <hr style={{ margin: "20px 0px" }} />

      <ul style={{ transition: "all 0.3s ease" }} className="pl-5 pb-3 mb-0">
        {categoriesName.map((c) => (
          <Link to={`/category/${c.category.name}`}>
            <li style={{ color: "gray", marginBottom: "10px" }}>{c.category.name}</li>
          </Link>
        ))
        }
      </ul>
      <hr className="mx-auto" style={{ width: "85%" }} />
    </div>
  )
}

export default BrandSidebar
