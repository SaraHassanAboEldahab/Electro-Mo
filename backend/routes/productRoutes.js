import express from "express"
const router = express.Router()
import { auth, admin } from "../middleware/authMiddleware.js"

import { deleteProduct, getProductById, getProducts, updateProduct, createProduct, createReview, getAllProducts } from "../controllers/productController.js";


router.route("/").get(getProducts).post(auth, admin, createProduct)
router.route("/:id/review").post(auth, createReview)

router.route("/allproducts").get(getAllProducts)

router.route("/:id")
    .get(getProductById)
    .delete(auth, admin, deleteProduct)
    .put(auth, admin, updateProduct)

export default router;