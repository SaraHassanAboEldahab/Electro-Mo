import asyncHandler from "express-async-handler"
import User from "../models/user.js"
import generateToken from "../utils/generateToken.js"


// @desc Register
// @route POST /api/users
// @access Public
const userRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User is already existed")
    }
    const user = await User.create({ name, email, password })
    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(404)
        throw new Error("Invalid user data")
    }
})


// @desc Login
// @route POST /api/users/login
// @access Public
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid Email Or Password")
    }
})

// @desc Get Profile
// @route POST /api/users/profile
// @access Private
const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

// @desc Update Profile
// @route PUT /api/users/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()
        res.status(200).json({
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })

    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

// @desc Get All users
// @route GET /api/users/
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)

})

export { userRegister, userLogin, getProfile, updateProfile, getUsers }