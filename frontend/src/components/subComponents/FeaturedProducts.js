import React from 'react'

const FeaturedProducts = () => {
    return (
        <div className="container" style={{ margin: "100px 0px" }}>
            <div className="row">
                <div className="col-lg-3">
                    <h6 className="head">Featured products</h6>
                    <hr />
                    <div className="media">
                        <img style={{ width: "50%" }} src="/images/blog.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media my-5">
                        <img style={{ width: "50%" }} src="/images/c.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media mb-3 mb-lg-0">
                        <img style={{ width: "50%" }} src="/images/3.png" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <h6 className="head">Onsale Products</h6>
                    <hr />
                    <div className="media">
                        <img style={{ width: "50%" }} src="/images/m1.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media my-5">
                        <img style={{ width: "50%" }} src="/images/4.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media mb-3 mb-lg-0">
                        <img style={{ width: "50%" }} src="/images/pc.png" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h6 className="head">Top Rated Products</h6>
                    <hr />
                    <div className="media">
                        <img style={{ width: "50%" }} src="/images/m3.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Airpods Wireless</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media my-5">
                        <img style={{ width: "50%" }} src="/images/c1.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">Logitech G-Series</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                    <div className="media mb-3 mb-lg-0">
                        <img style={{ width: "50%" }} src="/images/blog.jpg" alt="..." />
                        <div className="media-body pl-2">
                            <h6 className="text-info">iPhone 11 Pro</h6>
                            <h6>$1000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <img style={{ width: "100%", marginTop: "30%" }} src="/images/11.png" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
