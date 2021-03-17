import React from 'react'
import { Link } from 'react-router-dom'


const FeaturedProducts = ({ products }) => {


    const topProducts = products && products.filter((product) => product.rating > 4.5)

    const onSaleProducts = products && products.filter((product) => product.isOnSale)

    return (

        <div className="row mx-0 " style={{ marginTop: "120px" }}>
            <div className="col-lg-3 order-lg-1 order-2">
                <h6 className="head">Featured products</h6>
                <hr />
                {products.map((product, index) => {
                    if (0 < index && index < 4) {
                        return (
                            <Link key={product._id} to={`/product/${product._id}`}>
                                <div key={index} className="media mb-1 mb-lg-3" style={{ height: "150px" }}>
                                    <img style={{ width: "70px", height: "70px" }} src={product.image} alt="..." />
                                    <div className="media-body pl-2">
                                        <h6 className="text-info">{product.name}</h6>
                                        {product.isOnSale ? <div className="d-flex">
                                            <h6 className="text-dark mr-3">${product.price - (product.price * (product.discount / 100))}</h6>
                                            <span style={{ color: "gray", fontWeight: "400", display: "inline-block", width: "fit-content" }}>${product.price}
                                                <hr style={{ margin: "-12px 0px 0px 0px", width: "100%", backgroundColor: "gray" }} />
                                            </span>
                                        </div> :
                                            <h6 className="text-dark">${product.price}</h6>
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="col-lg-3 order-lg-2 order-3">
                <h6 className="head">Top Rated Products</h6>
                <hr />
                {topProducts.map((product, index) => {
                    if (index < 3) {
                        return (
                            <Link key={product._id} to={`/product/${product._id}`}>
                                <div key={index} className="media mb-1 mb-lg-3" style={{ height: "150px" }}>
                                    <img style={{ width: "70px", height: "70px" }} src={product.image} alt="..." />
                                    <div className="media-body pl-2">
                                        <h6 className="text-info">{product.name}</h6>
                                        {product.isOnSale ? <div className="d-flex">
                                            <h6 className="text-dark mr-3">${product.price - (product.price * (product.discount / 100))}</h6>
                                            <span style={{ color: "gray", fontWeight: "400", display: "inline-block", width: "fit-content" }}>${product.price}
                                                <hr style={{ margin: "-12px 0px 0px 0px", width: "100%", backgroundColor: "gray" }} />
                                            </span>
                                        </div> :
                                            <h6 className="text-dark">${product.price}</h6>
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="col-lg-3 order-lg-3 order-4">
                <h6 className="head ">Onsale Products</h6>
                <hr />
                {onSaleProducts.map((product, index) => {
                    if (index < 3) {
                        return (
                            <Link key={product._id} to={`/product/${product._id}`}>
                                <div key={index} className="media mb-1 mb-lg-3" style={{ height: "150px" }}>
                                    <img style={{ width: "70px", height: "70px" }} src={product.image} alt="..." />
                                    <div className="media-body pl-2">
                                        <h6 className="text-info">{product.name}</h6>
                                        {product.isOnSale ? <div className="d-flex">
                                            <h6 className="text-dark mr-3">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</h6>
                                            <span style={{ color: "gray", fontWeight: "400", display: "inline-block", width: "fit-content" }}>${product.price}
                                                <hr style={{ margin: "-12px 0px 0px 0px", width: "100%", backgroundColor: "gray" }} />
                                            </span>
                                        </div> :
                                            <h6 className="text-dark">${product.price}</h6>
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
            <div className="col-lg-3 order-lg-4 order-1 text-center">
                <img style={{ width: "80%", height: "80%" }} src="/images/v2-right-1_320x.jpg" alt="..." />
            </div>
        </div>
    )
}

export default FeaturedProducts
