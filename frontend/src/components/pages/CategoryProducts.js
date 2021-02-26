import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../actions/productActions"
import { fetchCategories, fetchCategoryDetails } from "../../actions/categoryActions"
import Category from "../subComponents/Category"
import CategoryCard from '../subComponents/CategoryCard'
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"

const CategoryProducts = ({ match }) => {

    //const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const allProducts = useSelector((state) => state.allProducts)
    const { loading, error, products } = allProducts

    const categoriesList = useSelector(state => state.categoriesList)
    const { categories, loading: catLoading, error: catError } = categoriesList

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchCategories())
        dispatch(fetchCategoryDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div className="container">
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> : (
                    <div className="row categories px-4 px-sm-0">
                        <div className="col-md-3 sidebar pt-3 px-0">
                            <h5 className="text-info pl-3 mb-3">Categories</h5>
                            <hr className="mb-4" />
                            {catError && <ErrorMessage variant="danger">{catError}</ErrorMessage>}
                            {categories.map((category) => <Category categoryName={category.name} categoryId={category._id} />)}
                        </div>
                        <div className="col-md-9  category-card">
                            {products.map((product) => {
                                if (product.category._id === match.params.id) {
                                    return (
                                        <div key={product._id}>
                                            <CategoryCard
                                                rating={product.rating}
                                                name={product.name}
                                                img={product.image}
                                                id={product._id} />
                                        </div>
                                    )
                                }

                            })}
                        </div>
                    </div>
                )}
        </div>
    )
}

export default CategoryProducts
