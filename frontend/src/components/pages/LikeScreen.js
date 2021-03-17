import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeFromLikes } from "../../actions/cartActions"
import { addToCart } from "../../actions/cartActions"
import ErrorMessage from '../subComponents/ErrorMessage'
const LikeScreen = ({ }) => {


  const dispatch = useDispatch()

  const { likeItems } = useSelector((state) => state.like)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromLikes(id))
  }
  return (
    <div className="container-fluid wishlist">
      <h3 className=" text-center mt-4 mb-3 mb-md-5">Wishlist Page</h3>
      {likeItems.length === 0 ? <ErrorMessage>Your Wishlist Is Empty</ErrorMessage> :
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <div className="row  d-none d-md-flex">
              <div className="col-md-2 d-flex  justify-content-center align-items-center">Delete</div>
              <div className="col-md-2 d-flex  justify-content-center align-items-center">Image</div>
              <div className="col-md-2 d-flex  justify-content-center align-items-center">
                <span>Name</span>
              </div>
              <div className="col-md-1 d-flex  justify-content-center align-items-center">Price</div>
              <div className="col-md-2 d-flex  justify-content-center align-items-center"> Available</div>
              <div className="col-md-1 d-flex  justify-content-center align-items-center"> Quantity</div>
            </div>
          </li>
          {likeItems.map(item => (
            <li key={item.product} className="list-group-item ">
              <div className="row my-2">
                <div className="col-md-2 mt-md-0 mt-3 justify-content-center d-flex align-items-center">
                  <span className="d-md-none d-inline-block">Delete</span>
                  <i className="fas fa-trash ml-auto ml-md-0" style={{ fontSize: "20px", cursor: "pointer" }}
                    onClick={() => removeFromCartHandler(item.product)}>
                  </i>
                </div>
                <div className="col-md-2 mt-md-0 mt-3 d-flex justify-content-center align-items-center wishlist-img">
                  <span className="d-md-none d-inline-block">Image</span>
                  <img src={item.image} alt={item.name} className=" ml-auto ml-md-0 w-75" />
                </div>

                <div className="col-md-2 mt-md-0 mt-3 d-flex justify-content-center align-items-center">
                  <span className="d-md-none d-inline-block">Name</span>
                  <span className=" text-center ml-auto ml-md-0" style={{ fontWeight: "bold", color: "gray" }}>
                    {item.name}
                  </span>
                </div>

                <div className="col-md-1 mt-md-0 mt-3 d-flex justify-content-center align-items-center">
                  <span className="d-md-none d-inline-block">Price</span>
                  <span className=" ml-auto ml-md-0" style={{ fontWeight: "bold", color: "gray" }}>
                    ${item.price}
                  </span>
                </div>
                <div className="col-md-2 mt-md-0 mt-3 justify-content-center d-flex align-items-center">
                  <span className="d-md-none d-inline-block">Available</span>
                  <span className=" ml-auto ml-md-0" style={{ fontWeight: "bold", color: "gray" }}>
                    {item.countInStock > 0 ? "In Stock" : "Out Stock"}
                  </span>
                </div>
                <div className="col-md-1 mt-md-0 mt-3 justify-content-center d-flex align-items-center">
                  <span className="d-md-none d-inline-block">Quantity</span>
                  <span className=" ml-auto ml-md-0 text-center w-75 like-quantity"
                    style={{
                      fontWeight: "bold",
                      color: "gray",
                      border: "solid 0.05rem rgb(199, 199, 199)",
                      borderRadius: "50px"
                    }}
                  >
                    1
              </span>
                </div>
                <div className="col-md-2 flex-column justify-content-center d-flex align-items-center text-center">
                  <Link

                    to={`/product/${item.product}`} className="btn btn-info mt-md-0 mt-4 ml-auto ml-md-0 w-100 w-md-75" style={{ borderRadius: "20px" }}>View Product</Link>
                  <button
                    type="button"
                    disabled={item.countInStock === 0}
                    onClick={() => dispatch(addToCart(item.product, 1))}
                    className="btn btn-light mb-md-0 mb-4  mt-3 ml-auto ml-md-0 w-100 w-md-75" style={{ borderRadius: "20px" }}>Add To Cart</button>
                </div>
              </div>
            </li>

          ))}
        </ul>
      }
    </div >
  )
}

export default LikeScreen
