import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../actions/productActions"
import { fetchCategories } from "../../actions/categoryActions"

//components importing
import ProductCard from "../subComponents/ProductCard"
import TrendedProducts from "../subComponents/TrendedProducts"
import SpecificProducts from "../subComponents/SpecificProducts"
import FeaturedProducts from "../subComponents/FeaturedProducts"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"


const Home = ({ match }) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const productsList = useSelector((state) => state.productsList)
    const { loading, error, products } = productsList

    const categoriesList = useSelector(state => state.categoriesList)
    const { categories, loading: catLoading, error: catError } = categoriesList

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchProductsList(keyword))
    }, [dispatch])

    return (
        <div className="container home mt-5">
            {loading ? <Loader /> : error ? <ErrorMessage variant="danger">{error}</ErrorMessage>
                : products.length > 0 ? (
                    <>
                        <div className="row">
                            <div className="col-lg-8 home__img">
                                <img src="/images/s4.jpg" alt="" />
                                <h3>Mo-Shop is an e-commerce web app </h3>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-lg-4">


                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <ProductCard
                                                name={products[0].name}
                                                img={products[0].image}
                                                price={products[0].price}
                                                id={products[0]._id}
                                            />
                                        </div>
                                        {products.map((product, index) => {
                                            if (index > 0) {
                                                return (
                                                    <div key={product._id} className="carousel-item">
                                                        <ProductCard
                                                            name={product.name}
                                                            img={product.image}
                                                            price={product.price}
                                                            id={product._id}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <a className="carousel-control-prev" style={{ bottom: "50%", height: "16px", top: "50%" }} href="#carouselExampleControls" role="button" data-slide="prev">
                                        <i className="fas fa-chevron-left" style={{ color: "gray" }}></i>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" style={{ bottom: "50%", height: "16px", top: "50%" }} href="#carouselExampleControls" role="button" data-slide="next">
                                        <i className="fas fa-chevron-right" style={{ color: "gray" }}></i>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <TrendedProducts products={products} />

                        <div className="row" style={{ height: "fit-content", margin: "100px 0px" }}>
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{ height: "350px" }}>
                                <img style={{ width: "100%", height: "100%" }} src="/images/c8.jpg" alt="..." />
                            </div>
                            <div className="col-lg-7" style={{ height: "350px" }}>
                                <div className="row" style={{ height: "45%" }}>
                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/e4.png" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/c5.jpg" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/m6.jpg" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row " style={{ height: "45%", marginTop: "7%" }}>
                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/m3.jpg" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/a3.jpg" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="card" style={{ width: "100%", height: "100%", margin: "0" }}>
                                            <img src="/images/c6.jpg" alt="..." style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SpecificProducts categories={categories} />
                        <FeaturedProducts />
                    </>
                ) : null
            }
        </div>
    )
}

export default Home
