import React from 'react'
import { Link } from "react-router-dom"

const CheckSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <ul className="nav justify-content-left mb-4">
            <li className="nav-item">
                {step1 ?
                    <Link className="nav-link text-dark" to="/login">Sign In</Link>
                    : <a className="nav-link disabled" disabled>Sign In</a>
                }
            </li>
            <i className="fas fa-chevron-right" style={{ marginTop: "12px", color: "gray" }}></i>
            <li className="nav-item">
                {step2 ?
                    <Link className="nav-link text-dark" to="/information">Information</Link>
                    : <a className="nav-link disabled" aria-disabled="true">Information</a>
                }
            </li>
            <i className="fas fa-chevron-right" style={{ marginTop: "12px", color: "gray" }}></i>
            <li className="nav-item">
                {step3 ?
                    <Link className="nav-link text-dark" to="/shipping">Shipping</Link>
                    : <a className="nav-link disabled" aria-disabled="true">Shipping</a>
                }
            </li>
            <i className="fas fa-chevron-right" style={{ marginTop: "12px", color: "gray" }}></i>
            <li className="nav-item">
                {step4 ?
                    <Link className="nav-link text-dark" to="/payment">Payment</Link>
                    : <a className="nav-link disabled" aria-disabled="true">Payment</a>
                }
            </li>
        </ul>
    )
}

export default CheckSteps
