import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ brand, name, price, img, id }) => {
    return (
        <div className="card" style={{ height: "fit-content" }}>
            <Link to={`/brand/${brand}`} >
                <span className="span-styling pl-2 pt-2">{brand}</span>
            </Link>
            <h6 className="card-title text-info pl-2 pt-2">{name}</h6>
            <img src={img} className="card-img-top" alt="..." style={{ height: "200px", width: "80%", margin: "0 auto" }} />
            <div className="card-body p-4">
                <div className="d-flex">
                    <span style={{ fontWeight: "bold", fontSize: "20px", color: "gray" }}>${price}</span>
                    <button className="btn rounded-btn  ml-auto" >
                        <Link to={`/product/${id}`}>

                            <i className="fas fa-long-arrow-alt-right"></i>

                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
