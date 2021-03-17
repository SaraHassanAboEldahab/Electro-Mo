import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ brand, name, price, img, id, discount, isOnSale }) => {
    return (
        <div className="card" style={{ height: "fit-content" }}>
            <Link to={`/brand/${brand}`} >
                <span className="span-styling pl-2 pt-2">{brand}</span>
            </Link>
            <h6 className="card-title text-info pl-2 pt-2">{name}</h6>
            <img src={img} className="card-img-top" alt="..." style={{ height: "200px", width: "80%", margin: "0 auto" }} />
            <div className="card-body px-2 py-3">
                <div className="d-flex align-items-center">
                    {isOnSale ? <>
                        <h6 className="text-danger mr-3 mb-0">${(price - (price * (discount / 100))).toFixed(2)}</h6>
                        <span style={{ color: "gray", fontWeight: "400", display: "inline-block", width: "fit-content", height: "20px" }}>
                            ${price}
                            <hr style={{ margin: "-12px 0px 0px 0px", width: "100%", backgroundColor: "gray" }} />
                        </span>
                    </> :
                        <h6 className="text-dark">${price}</h6>
                    }
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
