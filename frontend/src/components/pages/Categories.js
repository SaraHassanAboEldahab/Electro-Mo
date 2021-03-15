import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../actions/categoryActions"
import { fetchProductsList } from "../../actions/productActions"
import { Link } from "react-router-dom"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import Paginate from '../subComponents/Paginate'
import CategoryCard from '../subComponents/CategoryCard'

const Categories = ({ match }) => {

  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products, page, pages } = productsList

  const firstProducts = products && products.slice(0, 6)
  const secondProducts = products && products.slice(6, 12)


  useEffect(() => {
    dispatch(fetchProductsList(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <div className="container-fluid px-5 mt-5">
        <h4 className="head">All Categories</h4>
        <hr />
        {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
          loading ? <Loader /> :
            <div className="categories">
              <div className="products row mx-0 mb-5" style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}>
                {firstProducts.map(product => (
                  <div key={product._id} className="category-card  col-lg-2 col-sm-4 col-6 px-1 mb-5" >
                    <CategoryCard name={product.name} img={product.image} categoryName={product.category.name} />
                  </div>
                ))}
              </div>
              <div className="products row mx-0">
                {secondProducts.map(product => (
                  <div key={product._id} className=" category-card col-lg-2  col-sm-4 col-6 px-1 mb-5">
                    <CategoryCard name={product.name} img={product.image} categoryName={product.category.name} />
                  </div>
                ))}
              </div>
            </div>
        }
      </div>
      <Paginate page={page} pages={pages} keyword={keyword ? keyword : ""} />
    </>
  )
}

export default Categories
