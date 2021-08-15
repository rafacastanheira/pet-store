import { Request, Response } from 'express'

export default class UsersController{
    public createUsers(request: Request, response: Response): Response<string>{
        return response.status(200).json('user was created')
    }
}
