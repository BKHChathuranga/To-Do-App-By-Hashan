import express from 'express'

import TodoRoute from "./todo.route.js";

const router = express.Router()

router.use('/todo', TodoRoute)

export default router