import asyncHandler from "express-async-handler"
import Category from "../models/category.js"


// @desc Get All categories
// @route GET /api/categories/
// @access Private/Admin
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json(categories)

})

// @desc create Product
// @route POST /api/category/:id
// @access Private for admin only
const createCategory = asyncHandler(async (req, res) => {

    const category = new Category({
        name: req.body.name,
    })

    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
})


// @desc Fetch category by id
// @route GET /api/categories/:id
// @access Public
const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
        return res.json(category)
    }
    res.status(404)
    throw new Error("Category Not Found")
})

export { getCategories, createCategory, getCategoryById }