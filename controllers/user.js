const { PrismaClient } = require("@prisma/client")

//initialize prisma client
const prisma = new PrismaClient()

async function get(req, res) {
    try {
        const users = await prisma.user.findMany()
        res.send({ data: users })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getOne(req, res) {

}

async function create(req, res) {
    try {
        const newUser = await prisma.user.create({ data: req.body })
        res.send({ message: "User created successfully", data: newUser })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function edit(req, res) {
    try {
        const id = req.params.id
        const newAge = req.body.age
        const updatedUser = await prisma.user.update({ where: { id: parseInt(id) }, data: { age: newAge } })
        res.send({ message: "User updated successfully", data: updatedUser })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function del(req, res) {
    try {
        const id = req.params.id
        const deletedUser = await prisma.user.delete({ where: { id: parseInt(id) } })
        res.send({ message: "User deleted successfully", data: deletedUser })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    get,
    getOne,
    create,
    edit,
    del
}