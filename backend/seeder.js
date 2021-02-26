import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/user.js"
import Product from "./models/product.js"
import Order from "./models/order.js"
import connectDB from "./config/db.js"
import Category from "./models/category.js"
import categories from "./data/categories.js"

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()
        await Category.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const createdCategories = await Category.insertMany(categories)
        const sampleProducts = products.map((product, index) => {
            if (index < 4) {
                return { ...product, user: adminUser, category: createdCategories[0]._id }
            }
            if (index < 7) {
                return { ...product, user: adminUser, category: createdCategories[1]._id }
            }
            if (index < 12) {
                return { ...product, user: adminUser, category: createdCategories[2]._id }
            }
            if (index < 18) {
                return { ...product, user: adminUser, category: createdCategories[3]._id }
            }
        })


        await Product.insertMany(sampleProducts)
        /* const sampleCategories = categories.map((cat, index) => {
             if (index === 0) {
                 return { ...cat, products: [sampleProducts[0], sampleProducts[1], sampleProducts[2]] }
             }
             if (index === 1) {
                 return { ...cat, products: [sampleProducts[3], sampleProducts[4], sampleProducts[5]] }
             }
             if (index === 2) {
                 return { ...cat, products: [sampleProducts[6], sampleProducts[7], sampleProducts[8]] }
             }
             if (index === 3) {
                 return { ...cat, products: [sampleProducts[9], sampleProducts[10], sampleProducts[11]] }
             }
         })*/


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
        await Category.deleteMany()
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