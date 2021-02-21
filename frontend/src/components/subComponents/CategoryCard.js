import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "./Rating"

const CategoryCard = ({ name, img, id, rating }) => {
    return (
        <div className="category-card__content">
            <div className="card-overlay">
                <button>
                    <Link to={`/product/${id}`}> Show details</Link>
                </button>
            </div>
            <div className="media">
                <img src={img} className="mr-1" alt="..." />
                <div className="media-body">
                    <h6 className="mb-2">{name}</h6>
                    <Rating value={rating} />
                </div>
            </div>
        </div>

    )
}

export default CategoryCard
