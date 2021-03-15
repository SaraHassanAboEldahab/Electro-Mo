import React from 'react'
import { Link } from "react-router-dom"

const CategoryCard = ({ name, img, categoryName }) => {
  return (
    <Link to={`/category/${categoryName}`}>
      <div className="category-card__content" style={{}}>
        <img src={img} alt="" />
        <h6 className="text-center">{name}</h6>
      </div>
    </Link>
  )
}

export default CategoryCard
