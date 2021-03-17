import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../actions/productActions"
import { Link } from "react-router-dom"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import TrendCard from "../subComponents/TrendCard"
import ViewModal from '../subComponents/ViewModal'
import BrandSidebar from '../subComponents/BrandSidebar'


const BrandScreen = ({ match }) => {

  const [data, setData] = useState({})

  const dispatch = useDispatch()

  const allProducts = useSelector((state) => state.allProducts)
  const { loading, error, products } = allProducts

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch, match])

  const oneBrand = products && products.filter(product => product.brand === match.params.brand)

  return (
    <div className="container-fluid px-5 mt-5">
      <>
        <div className="row mx-0  one-category" style={{}}>
          <div className="col-md-3">
            <BrandSidebar productsCategories={oneBrand} brandName={match.params.brand} />
          </div>

          <div className="col-md-9">
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
              loading ? <Loader /> : oneBrand.length > 0 ?
                <div className="row mx-0">
                  {oneBrand.map((product) => (
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
                </div> : null
            }
            <ViewModal data={data} />
          </div>
        </div>
      </>
    </div>
  )
}

export default BrandScreen
