import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "sara",
        email: "sara@gmail.com",
        password: bcrypt.hashSync("sara205", 10)
    },
    {
        name: "mona",
        email: "mona@gmail.com",
        password: bcrypt.hashSync("mona175", 10)
    }
]

export default users;