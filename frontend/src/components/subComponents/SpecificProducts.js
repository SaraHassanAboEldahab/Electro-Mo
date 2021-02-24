import React from 'react'

const SpecificProducts = () => {
    return (
        <div className="container specific-products">
            <h4 className="head">Featured Products</h4>
            <hr />
            <div className="row mx-0" style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                <div className="col-lg-3 py-3" style={{ backgroundColor: "#f9f9f9" }}>
                    <h6>Computers</h6>
                    <ul>
                        <li>Desktop Computers</li>
                        <li>Printers & Ink</li>
                        <li>Software</li>
                        <li>Computer Accesories</li>
                        <li>Waterproof Headphones</li>
                        <li>Home Audio</li>
                    </ul>
                    <h6>Laptops & Accesories</h6>
                    <ul>
                        <li>All Laptops</li>
                        <li>Laptops by Brand</li>
                        <li>Power supply</li>
                        <li>Laptop Bags</li>
                    </ul>
                </div>
                <div className="col-lg-3" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
                    <ul className="list-group list-group-flush pt-3">
                        <li className="list-group-item">Samsung</li>
                        <li className="list-group-item">Dell</li>
                        <li className="list-group-item">Lenovo</li>
                        <li className="list-group-item">HP</li>
                        <li className="list-group-item">Xiaomi</li>
                    </ul>
                </div>
                <div className="col-lg-6" style={{}}>
                    <img style={{ width: "100%", marginTop: "20%" }} src="/images/lap.png" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default SpecificProducts
