//imports
const express = require('express')

//initialize express instance
const app = express()

//environment configuration
require('dotenv').config()

//middleware
app.use(express.json())

//route handlers
const userRoutes = require('./routes/user')
const houseRoutes = require('./routes/house')

app.use('/user', userRoutes)
app.use('/house', houseRoutes)

//initialize port and server instance
const port = process.env.PORT
app.listen(port, () => console.log(`server is listenning on port ${port}`))