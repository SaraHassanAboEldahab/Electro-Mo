import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList, fetchAllProducts } from "../../actions/productActions"
import { fetchCategories } from "../../actions/categoryActions"
import { Link } from "react-router-dom"

//components importing
import ProductCard from "../subComponents/ProductCard"
import TrendedProducts from "../subComponents/TrendedProducts"
import SpecificProducts from "../subComponents/SpecificProducts"
import FeaturedProducts from "../subComponents/FeaturedProducts"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import Footer from '../reusable/Footer'


const Home = ({ match }) => {
    const dispatch = useDispatch()

    const categoriesList = useSelector(state => state.categoriesList)
    const { categories } = categoriesList

    const allProducts = useSelector((state) => state.allProducts)
    const { loading, error, products } = allProducts

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <div className=" home mt-5">
            {loading ? <Loader /> : error ? <ErrorMessage variant="danger">{error}</ErrorMessage>
                : products.length > 0 ? (
                    <>
                        <div className="container-fluid px-5">
                            <div className="row">
                                <div className="col-lg-9 home__img">
                                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="/images/screen.jpg" className="d-block w-100" alt="..." style={{ backgroundSize: "cover" }} />
                                                <div className="carousel-caption text-left">
                                                    <h3 className="animate__animated animate__pulse animate__slow">ENHANCE YOUR </h3>
                                                    <h3 className="animate__animated animate__bounceInLeft animate__slow">ENTERTAINMENT </h3>
                                                    <div className="d-flex animate__animated animate__bounceInRight animate__slower">
                                                        <span className="mt-3">LAST CALL FOR UP TO </span>
                                                        <span>$</span>
                                                        <h2>250</h2>
                                                        <span className="mt-3">OFF!</span>
                                                    </div>
                                                    <Link to="/categories" className="text-light">
                                                        <button className="btn btn-info">
                                                            Shop Now
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/images/mac.jpg" className="d-block w-100" alt="..." style={{ backgroundSize: "cover" }} />
                                                <div className="carousel-caption  text-left">
                                                    <h3 className="animate__animated animate__pulse animate__slow">ENHANCE YOUR </h3>
                                                    <h3 className="animate__animated animate__bounceInLeft animate__slow">ENTERTAINMENT </h3>
                                                    <div className="d-flex animate__animated animate__bounceInRight animate__slow">
                                                        <span className="mt-3">LAST CALL FOR UP TO </span>
                                                        <span>$</span>
                                                        <h2>250</h2>
                                                        <span className="mt-3">OFF!</span>
                                                    </div>
                                                    <button className="btn btn-info">
                                                        <Link to="/categories" className="text-light">Shop Now</Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <ProductCard
                                                    name={products[0].name}
                                                    img={products[0].image}
                                                    price={products[0].price}
                                                    id={products[0]._id}
                                                    brand={products[0].brand}
                                                    discount={products[0].discount}
                                                    isOnSale={products[0].isOnSale}
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
                                                                brand={product.brand}
                                                                discount={product.discount}
                                                                isOnSale={product.isOnSale}
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
                                    <img style={{ width: "100%", height: "100%" }} src="/images/s4.jpg" alt="..." />
                                </div>
                                <div className="col-lg-7" style={{ height: "350px" }}>
                                    <div className="row" style={{ height: "45%" }}>
                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/m2.png" alt="..." />
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/GamePad_160x.jpg" alt="..." />
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/eyewear_large.jpg" alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row " style={{ height: "45%", marginTop: "7%" }}>
                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/lap3.jpg" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/Phone4_large.jpg" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" style={{ width: "100%", height: "100%" }}>
                                                <img className="w-75 h-75 m-auto" src="/images/Headphones_large.jpg" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {categories.length > 0 && <SpecificProducts categories={categories} productsBrands={products} />}
                            <FeaturedProducts products={products} />
                        </div>
                        <Footer categories={categories} />
                    </>
                ) : null
            }
        </div>
    )
}

export default Home
