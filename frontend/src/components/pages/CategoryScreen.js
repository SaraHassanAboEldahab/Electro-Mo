import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../actions/productActions"
import { Link } from "react-router-dom"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import TrendCard from "../subComponents/TrendCard"
import ViewModal from '../subComponents/ViewModal'
import CategorySidebar from '../subComponents/CategorySidebar'


const CategoryScreen = ({ match }) => {

  const [data, setData] = useState({})

  const dispatch = useDispatch()

  const allProducts = useSelector((state) => state.allProducts)
  const { loading, error, products } = allProducts


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch, match])

  const oneCategory = products && products.filter(product => product.category.name === match.params.name)

  return (
    <div className="container-fluid px-5 mt-0">

      <>
        <div className="row mx-0  one-category">
          <div className="col-md-3">
            <CategorySidebar productsBrands={oneCategory} categoryName={match.params.name} />
          </div>
          {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
            loading ? <Loader /> : oneCategory.length > 0 ?
              <div className="col-md-9">
                <div className="row mx-0">
                  {oneCategory.map((product) => (
                    <div key={product._id} className="col-sm-6 col-lg-3 category">
                      <TrendCard
                        name={product.name}
                        img={product.image}
                        price={product.price}
                        id={product._id}
                        brand={product.brand}
                        countInStock={product.countInStock}
                        discount={product.discount}
                        isOnSale={product.isOnSale}
                        setData={setData}
                      />
                    </div>
                  ))}
                </div>
                <ViewModal data={data} />
              </div> : null
          }
        </div>
      </>

    </div>
  )
}

export default CategoryScreen
