const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function get(req, res) {
    try {
        const houses = await prisma.house.findMany({
            include: {
                owner: true,
                builder: true
            }
        })
        res.send({ data: houses })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getOne(req, res) {
    try {
        const id = req.params.id
        const allHouses = await prisma.house.findUnique({
            where: {
                id,
            },
            include: {
                owner: true,
                builder: true
            }
        })
        res.send({ data: allHouses })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const newHouse = await prisma.house.create({ data: req.body })
        res.send({ message: "House created successfully", data: newHouse })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function filter(req, res) {
    try {
        const filteredHouses = await prisma.house.findMany({
            where: {
                wifiPassword: {
                    not: null
                },
                owner: {
                    age: {
                        gte: 20
                    }
                }
            },
            orderBy: [
                {
                    'owner.firstName': 'desc'
                }
            ],
            include: {
                owner: true,
                builder: true
            }
        });
        res.send({ message: 'Filtered houses', data: filteredHouses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    get,
    getOne,
    create,
    filter
}