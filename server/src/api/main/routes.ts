import { Router, Request, Response } from 'express'
import Logger from '../../loaders/logger'
import generate from './controller'
const mainRouter = Router()

const handler = async (req: Request, res: Response) => {
    try {
        const { description } = req.body
        if (!description)
            throw { status: 400, message: 'Description is required' }

        // if (description.length < 60)
        //     throw {
        //         status: 400,
        //         message: 'Description must be at least 60 characters',
        //     }

        const data = await generate(description)

        res.status(200).json({
            success: true,
            message: 'Generation complete',
            data: data,
        })
    } catch (error) {
        console.log(error)

        Logger.error(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

mainRouter.post('/', handler)

export default mainRouter
