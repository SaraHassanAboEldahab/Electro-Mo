import asyncHandler from "express-async-handler"
import Product from "../models/product.js"

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {

    const pageSize = 6
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1))
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
})


// @desc Fetch product by id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        return res.json(product)
    }
    res.status(404)
    throw new Error("Product Not Found")
})


// @desc Delete Product
// @route GET /api/products/:id
// @access Private for admin only
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.status(200).json("Product is removed ")
    }
    res.status(404)
    throw new Error("Product Not Found")
})


// @desc create Product
// @route POST /api/products/:id
// @access Private for admin only
const createProduct = asyncHandler(async (req, res) => {

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        user: req.user._id,
        category: req.body.category,
        brand: req.body.brand,
        image: req.body.image,
        countInStock: req.body.countInStock,
        numReview: req.body.numReview,
        description: req.body.description
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc update Product
// @route PUT /api/products/:id
// @access Private for admin only
const updateProduct = asyncHandler(async (req, res) => {

    const {
        name,
        price,
        category,
        brand,
        image,
        countInStock,
        numReview,
        description
    } = req.body
    const product = await Product.findById(req.params.id)

    if (product) {

        product.name = name
        product.price = price
        product.category = category
        product.brand = brand
        product.image = image
        product.countInStock = countInStock
        product.numReview = numReview
        product.description = description

        const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)
    } else {
        res.status(404)
        throw new Error("Product Not Found")
    }

})

// @desc Create New Review
// @route POST /api/products/:id/review
// @access Private
const createReview = asyncHandler(async (req, res) => {

    const { rating, comment } = req.body
    const product = await Product.findById(req.params.id)

    if (product) {

        const alreadyReviewed = product.reviews.find(r => r.user.id.toString() === req.user._id.toString())
        if (alreadyReviewed) {
            res.status(400)
            throw new Error("Product already reviewed")
        }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
        await product.save()
        res.status(201).json("Your Review Is Added")
    } else {
        res.status(404)
        throw new Error("Product Not Found")
    }

})


export { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createReview }