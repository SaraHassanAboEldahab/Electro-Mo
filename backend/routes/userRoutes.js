import express from "express"
const router = express.Router()

import { userRegister, userLogin, getProfile, updateProfile, getUsers } from "../controllers/userController.js"
import { auth, admin } from "../middleware/authMiddleware.js"

router.route("/").post(userRegister).get(auth, admin, getUsers)


router.post("/login", userLogin)


router.route("/profile").get(auth, getProfile).put(auth, updateProfile)

export default router;