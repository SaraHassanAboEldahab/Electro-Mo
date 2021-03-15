import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToLikes, removeFromLikes } from "../../actions/cartActions"


const TrendCard = ({ brand, name, img, price, id, setData, countInStock }) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [colorEye, setColorEye] = useState("gray")
    const [color, setColor] = useState("gray")


    const { likeItems } = useSelector((state) => state.like)


    return (

        <div className="trend-card p-2" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Link style={{ fontWeight: "400" }} to={`/brand/${brand}`} >
                <span className="hover-color pl-2 pt-2" style={{ color: "gray" }}>{brand}</span>
            </Link>
            <Link to={`/product/${id}`}>
                <div className="name"><p className="p-2 text-info">{name}</p></div>
                <img src={img} alt="" />
                <div className="d-flex mt-3 p-2">
                    <span style={{ fontWeight: "bold", fontSize: "18px", color: "gray" }}>${price}</span>
                    <button className="btn rounded-btn ml-auto" >
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </Link>
            {show && <div className="px-2">
                <hr className="mb-3" />
                <div className="d-flex">
                    <i className="far fa-eye"
                        style={{ color: colorEye, fontSize: "14px" }}
                        onMouseEnter={() => setColorEye("#00abc5")}
                        onMouseLeave={() => setColorEye("gray")}
                        data-toggle="modal" data-target={"#exampleModal"}
                        onClick={() => setData({ brand, name, price, img, id, countInStock })}
                    >
                        {" "} View
                    </i>
                    <i
                        className="far fa-heart ml-auto"
                        style={{ color: color, fontSize: "14px" }}
                        onMouseEnter={() => setColor("#00abc5")}
                        onMouseLeave={() => setColor("gray")}
                        onClick={() => likeItems.find((i) => i.product === id) ? dispatch(removeFromLikes(id)) : dispatch(addToLikes(id))}
                    >
                        {" "} Wishlist
                    </i>
                </div>
            </div>}
        </div>
    )
}

export default TrendCard
