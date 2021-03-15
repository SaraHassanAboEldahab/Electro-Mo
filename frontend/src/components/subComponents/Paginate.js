import React from 'react'
import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
    return pages > 0 && (
        <Pagination style={{ marginLeft: "47%", marginTop: "100px" }}>
            {[...Array(pages).keys()].map((x, index) => (
                <LinkContainer
                    key={index}
                    to={!isAdmin ? keyword ? `/search/${keyword}/page/${x + 1}`
                        : `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
                >
                    <Pagination.Item variant="info" active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
}

export default Paginate
