import React from 'react'
import { Link } from "react-router-dom"

const TrendCard = ({ name, img, price, id }) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="trend-card">
                <img src={img} alt="" />
                <h6 className="p-2 text-info">{name}</h6>
                <div className="d-flex p-2">
                    <span style={{ fontWeight: "bold", fontSize: "20px", color: "gray" }}>{price}</span>
                    <button className="btn rounded-btn ml-auto" >
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default TrendCard
