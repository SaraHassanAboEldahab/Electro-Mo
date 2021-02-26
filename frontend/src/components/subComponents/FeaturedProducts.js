import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../actions/productActions"
import ErrorMessage from "./ErrorMessage"
import Loader from "./Loader"

const FeaturedProducts = () => {

    const dispatch = useDispatch()

    const allProducts = useSelector((state) => state.allProducts)
    const { loading, error, products } = allProducts

    const topProducts = products && products.filter((product) => product.rating > 4.5)

    const onSaleProducts = products && products.filter((product) => product.isOnSale)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <div className="container">
            {loading ? <Loader /> : error ? <ErrorMessage>{error}</ErrorMessage> :
                <div className="row">
                    <div className="col-lg-3">
                        <h6 className="head mt-5 mt-lg-0">Featured products</h6>
                        <hr />
                        {products.map((product, index) => {
                            if (index < 3) {
                                return (
                                    <div key={index} className="media mb-4">
                                        <img style={{ width: "100px", height: "80px" }} src={product.image} alt="..." />
                                        <div className="media-body pl-2">
                                            <h6 className="text-info">{product.name}</h6>
                                            <h6>{product.price}</h6>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="col-lg-3">
                        <h6 className="head mt-5 mt-lg-0">Top Rated Products</h6>
                        <hr />
                        {topProducts.map((product, index) => {
                            if (index < 3) {
                                return (
                                    <div key={index} className="media mb-4">
                                        <img style={{ width: "100px", height: "80px" }} src={product.image} alt="..." />
                                        <div className="media-body pl-2">
                                            <h6 className="text-info">{product.name}</h6>
                                            <h6>{product.price}</h6>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="col-lg-3">
                        <h6 className="head mt-5 mt-lg-0">Onsale Products</h6>
                        <hr />
                        {onSaleProducts.map((product, index) => {
                            if (index < 3) {
                                return (
                                    <div key={index} className="media mb-4">
                                        <img style={{ width: "100px", height: "80px" }} src={product.image} alt="..." />
                                        <div className="media-body pl-2">
                                            <h6 className="text-info">{product.name}</h6>
                                            <h6>{product.price}</h6>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="col-lg-3">
                        <img style={{ width: "100%", height: "60%", marginTop: "30%" }} src="/images/s1.jpg" alt="..." />
                    </div>
                </div>
            }
        </div>
    )
}

export default FeaturedProducts
