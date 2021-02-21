import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ name, price, img, id }) => {
    return (
        <div className="card" style={{ height: "fit-content" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body p-4">
                <h6 class="card-title text-info">{name}</h6>
                <div className="d-flex">
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>${price}</span>
                    <Link to={`/product/${id}`} className="btn rounded-btn  ml-auto" >
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
