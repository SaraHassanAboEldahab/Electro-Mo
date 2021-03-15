import React, { useState } from 'react'
import { addToCart, removeFromCart } from "../../actions/cartActions"
import { useDispatch } from "react-redux"


const ViewModal = ({ data: { id, brand, name, img, price, countInStock } }) => {

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  return (
    <div className="modal fade view-modal" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content pb-4">
          <div className="modal-header">
            <button type="button" className="close p-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body row mx-0">
            <div className="col-lg-6">
              <img src={img} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-lg-6 d-flex flex-column">

              <span className="mb-3" style={{ color: "gray" }}>{brand}</span>
              <h5 className="mb-3" >{name}</h5>
              <h4 className="mb-3" style={{ color: "red" }}>{price}</h4>
              <div className="d-flex">
                <label>Quantity</label>
                {countInStock > 0 ? (
                  <select
                    style={{ width: "40%" }}
                    className=" general-input ml-2 mb-4"
                    aria-label="Default select example"
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1} >
                        {x + 1}
                      </option>
                    ))
                    }
                  </select>
                ) : null}
              </div>
              <button
                onClick={() => dispatch(addToCart(id, qty))}
                className="btn btn-info "
                type="button"
                disabled={countInStock === 0}
                data-dismiss="modal"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewModal
