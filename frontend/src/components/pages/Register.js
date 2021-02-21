import React from 'react'
import LoginForms from "../subComponents/LoginForms"
import RegisterForms from "../subComponents/RegisterForms"

const Register = ({ location, history }) => {
    return (
        <div className="container">
            <div className="row mx-0 forms">
                <RegisterForms location={location} history={history} />
                <div className="col-md-2 align-items-center or-section d-flex flex-md-column">
                    <span className="vertical-line"> </span>
                    <span className="or">or</span>
                    <span className="vertical-line"> </span>
                </div>
                <LoginForms location={location} history={history} />
            </div>

        </div>
    )
}

export default Register
