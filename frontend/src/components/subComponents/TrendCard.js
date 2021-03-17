import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToLikes, removeFromLikes } from "../../actions/cartActions"


const TrendCard = ({ brand, name, img, price, id, setData, countInStock, discount, isOnSale }) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [colorEye, setColorEye] = useState("gray")
    const [color, setColor] = useState("gray")

    const { likeItems } = useSelector((state) => state.like)

    const checkLike = () => {
        const like = likeItems.find((i) => i.product === id)
        if (like) {
            dispatch(removeFromLikes(id))
            setColor("gray")
        } else {
            dispatch(addToLikes(id))
            setColor("#00abc5")

        }
    }

    return (

        <div className="trend-card p-2" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Link style={{ fontWeight: "400" }} to={`/brand/${brand}`} >
                <span className="hover-color pl-2 pt-2" style={{ color: "gray" }}>{brand}</span>
            </Link>
            <Link to={`/product/${id}`}>
                <div className="name"><p className="p-2 text-info">{name}</p></div>
                <img src={img} alt="" />
                <div className="d-flex mt-3 p-2">
                    {isOnSale ?
                        <div className="d-flex flex-column">
                            <h6 className="text-danger mr-3 mb-0">${(price - (price * (discount / 100))).toFixed(2)}</h6>
                            <span style={{ color: "gray", fontWeight: "400", display: "inline-block", width: "fit-content", height: "20px" }}>
                                ${price}
                                <hr style={{ margin: "-12px 0px 0px 0px", width: "100%", backgroundColor: "gray" }} />
                            </span>
                        </div> :
                        <h6 className="text-dark">${price}</h6>
                    }                    <button className="btn rounded-btn ml-auto" >
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
                        //onMouseEnter={() => color === "gray" ? setColor("#00abc5") : setColor("gray")}
                        //onMouseLeave={() => color === "#00abc5" ? setColor("#00abc5") : setColor("gray")}
                        onClick={checkLike}
                    >
                        {" "} Wishlist
                    </i>
                </div>
            </div>}
        </div>
    )
}

export default TrendCard
