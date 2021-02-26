import React, { useEffect } from 'react'
import { Button, Table, Row, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsList, deleteProduct, createProduct } from "../../actions/productActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
import Paginate from "../subComponents/Paginate"
import { PRODUCT_CREATE_RESET } from "../../actions/types"


const ProductListScreen = ({ history, match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productsList = useSelector(state => state.productsList)
    const { loading, products, error, page, pages } = productsList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const { loading: loadingDelete, error: errorDelete, success: successDelete } = useSelector(state => state.productDelete)

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })
        if (!userInfo.isAdmin) {
            history.push("/login")
        } else {
            dispatch(fetchProductsList("", pageNumber))
        }

    }, [dispatch, history, userInfo, successDelete, pageNumber])

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure !!")) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <div className="container p-0">
            <Row className="align-items-center">
                <Col>
                    <h4 className="head">All Products</h4>
                    <hr className="mb-2" />
                </Col>
                <Col className="text-right">
                    <LinkContainer to="/admin/product/create">
                        <Button className="btn btn-secondary my-3">
                            <i className="fas fa-plus"></i> Create Product
                    </Button>
                    </LinkContainer>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <ErrorMessage>{errorDelete}</ErrorMessage>}
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> :
                    <Table striped bordered hover responsive className="table-sm" style={{ marginTop: "40px" }}>
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">NAME</th>
                                <th className="text-center">PRICE</th>
                                <th className="text-center">CATEGORY</th>
                                <th className="text-center">COUNT IN STOCK</th>
                                <th className="text-center">BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td className="text-center">{product._id}</td>
                                    <td className="text-center">{product.name}</td>
                                    <td className="text-center">${product.price}</td>
                                    <td className="text-center">{product.category.name}</td>
                                    <td className="text-center">{product.countInStock}</td>
                                    <td className="text-center">{product.brand}</td>
                                    <td className="text-center">
                                        <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                            <Button className="btn-sm" variant="info">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button className="btn-sm ml-3" variant="danger" onClick={() => deleteHandler(product._id)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            }
            <Paginate page={page} pages={pages} isAdmin={true} />
        </div>
    )
}

export default ProductListScreen
