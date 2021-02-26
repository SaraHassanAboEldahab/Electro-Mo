import express from "express"
const router = express.Router()

import { createCategory, getCategories, getCategoryById } from "../controllers/categoryController.js"
import { auth, admin } from "../middleware/authMiddleware.js"

router.route("/").get(getCategories).post(auth, admin, createCategory)

router.route("/:id").get(getCategoryById)


export default router;