import React from 'react'
import { Link } from "react-router-dom"

const SpecificProducts = ({ categories, productsBrands }) => {
    const arr = productsBrands && productsBrands.map(item => {
        return [item.brand, item]
    })
    const newArr = new Map(arr)
    const brandsName = [...newArr.values()]
    return (
        <div className=" specific-products">
            <h4 className="head">Some Of Our Products</h4>
            <hr />
            <div className="row mx-0" style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                <div className="col-lg-3 py-3" style={{ backgroundColor: "#f9f9f9" }}>
                    <Link to={`/category/${categories[0].name}`}>
                        <h6 className="text-dark hover-color">Computers & Laptops</h6>
                    </Link>
                    <ul className="pl-3">
                        <li>Pc</li>
                        <li>Keyboards</li>
                        <li>Printers & Ink</li>
                        <li>Mice</li>
                    </ul>

                    <Link to={`/category/${categories[1].name}`}>
                        <h6 className="text-dark hover-color">Smartphones & Tablets</h6>
                    </Link>
                    <ul className="pl-3">
                        <li>Powerbanks</li>
                        <li> Memory Cards</li>
                        <li>Mobile Phone Charger</li>
                    </ul>

                    <Link to={`/category/${categories[2].name}`}>
                        <h6 className="text-dark hover-color">Accessories</h6>
                    </Link>
                    <ul className="pl-3">
                        <li>Headphones</li>
                        <li>Laptop Bags</li>
                    </ul>
                </div>
                <div className="col-lg-3" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
                    <ul className="list-group list-group-flush pt-3 brands">
                        {brandsName.map((brandName) => (
                            <Link key={brandName.brand} to={`/brand/${brandName.brand}`}>
                                <li className="list-group-item">{brandName.brand}</li>
                            </Link>
                        ))
                        }
                    </ul>
                </div>
                <div className="col-lg-6" style={{}}>
                    <img style={{ width: "100%", marginTop: "20%" }} src="/images/lap.png" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default SpecificProducts
