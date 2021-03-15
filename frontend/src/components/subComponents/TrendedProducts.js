import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import TrendCard from "./TrendCard"
import ViewModal from './ViewModal'


const TrendedProducts = ({ products }) => {

    const [data, setData] = useState({})

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
                {products.map((product, index) => {
                    if (index < 6) {
                        return (
                            <div key={product._id} className="col-6 col-sm-4 col-lg-2 p-1 trend">
                                <TrendCard
                                    name={product.name}
                                    img={product.image}
                                    price={product.price}
                                    id={product._id}
                                    brand={product.brand}
                                    countInStock={product.countInStock}
                                    setData={setData}
                                />
                            </div>
                        )
                    }
                })}
            </div>
            <ViewModal data={data} />
        </div>
    )
}

export default TrendedProducts
