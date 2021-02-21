import React, { useEffect } from 'react'
import { Pagination } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList } from "../../actions/productActions"
import Category from "../subComponents/Category"
import CategoryCard from '../subComponents/CategoryCard'
import Paginate from '../subComponents/Paginate'
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"


const Categories = ({ match }) => {

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productsList = useSelector((state) => state.productsList)
    const { loading, error, products, page, pages } = productsList

    useEffect(() => {
        dispatch(fetchProductsList(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <div className="container">
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> : (
                    <div className="row categories px-4 px-sm-0">
                        <div className="col-md-3 sidebar pt-3 px-0">
                            <h5 className="text-info pl-3 mb-3">Categories</h5>
                            <hr className="mb-4" />
                            <Category category="Computers & Laptops" />
                            <Category category="Smartphones & Tablets" />
                            <Category category="Accessories" />
                            <Category category="Others" />
                        </div>
                        <div className="col-md-9  category-card">
                            {products.map((product) => {
                                return (
                                    <div key={product._id}>
                                        <CategoryCard rating={product.rating} name={product.name} img={product.image} id={product._id} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

            <Paginate page={page} pages={pages} keyword={keyword ? keyword : ""} />
        </div>
    )
}
export default Categories
