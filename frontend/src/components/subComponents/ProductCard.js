import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ name, price, img, id }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="card" style={{ height: "fit-content" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h6 className="card-title text-info">{name}</h6>
                    <div className="d-flex">
                        <span style={{ fontWeight: "bold", fontSize: "20px", color: "gray" }}>${price}</span>
                        <button className="btn rounded-btn  ml-auto" >
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
