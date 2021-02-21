import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/user.js"
import Product from "./models/product.js"
import Order from "./models/order.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts)

        console.log("Data is imported".green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit()
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()

        console.log("Data is destroyed!".red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit()
    }
}

if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}