const db = require("../data/db-config.js");

const getAllUsers = () => {
    return db("users")
}

const getUserById = (id) => {
    return db("users").where("id", id).first()
}

const findBy = (filter) => {
    return db("users").where(filter).orderBy("users.id")
}

const addUser = async (user) => {
    const { id } = await db("users")
    .insert({ name: user.name, email: user.email, password: user.password})
    .then((ids) => {
        return getUserById(ids[0])
    })
    .catch((err) => {
        return 'user not found'
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    findBy,
    addUser
}