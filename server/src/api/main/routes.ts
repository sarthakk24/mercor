import { Router, Request, Response } from 'express'
import Logger from '../../loaders/logger'
import generate from './controller'
const mainRouter = Router()

const handler = async (req: Request, res: Response) => {
    try {
        const { description } = req.body
        if (!description)
            throw { status: 400, message: 'Description is required' }

        if (description.length < 60)
            throw {
                status: 400,
                message: 'Description must be at least 60 characters',
            }

        const result = await generate(description)

        res.status(200).json({
            success: true,
            message: 'Hello world!',
            data: result,
        })
    } catch (error) {
        Logger.error(error)
        res.status(error.status).json({
            success: false,
            message: error.message,
        })
    }
}

mainRouter.post('/', handler)

export default mainRouter
