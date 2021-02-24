import express from "express"
const router = express.Router()

import { userRegister, userLogin, getProfile, updateProfile, getUsers, deleteUser, getUserById, updateUser } from "../controllers/userController.js"
import { auth, admin } from "../middleware/authMiddleware.js"

router.route("/").post(userRegister).get(auth, admin, getUsers)


router.post("/login", userLogin)

router.route("/profile").get(auth, getProfile).put(auth, updateProfile)

router.route("/:id")
    .delete(auth, admin, deleteUser)
    .get(auth, admin, getUserById)
    .put(auth, admin, updateUser)

export default router;