import { Router } from 'express'

import usersRouter from '@modules/users/routes/users.router'

const routers = Router()

routers.use('/users', usersRouter)

export default routers

