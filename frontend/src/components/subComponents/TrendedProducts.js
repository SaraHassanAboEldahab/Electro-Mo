import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import TrendCard from "./TrendCard"

const TrendedProducts = ({ products }) => {

    return (
        <div className="trendedProducts">
            <div className="d-flex">
                <h4 className="head">Latest Products</h4>
                <Link to="/categories" className="ml-auto fw-bolder text-primary">
                    <i className="fas fa-chevron-circle-right mr-1"></i>
                    All Categories
                </Link>
            </div>
            <hr />
            <div className="row">
                {products.map((product, index) => (
                    <div key={product._id} className="col-md-4 col-lg-2 trend">
                        <TrendCard
                            name={product.name}
                            img={product.image}
                            price={product.price}
                            id={product._id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendedProducts
