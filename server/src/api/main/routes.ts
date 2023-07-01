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

        // const data = await generate(description)

        // res.status(200).json({
        //     success: true,
        //     message: 'Generation complete',
        //     data: data,
        // })

        res.status(200).json({
            success: true,
            message: 'Generation complete',
            data: {
                description:
                    'F1 driver pairing of Charles Leclerc and Max Verstappen in a Red Bull F1 car',
                caption: 'F1 driver pairing in Red Bull F1 car',
                tags: [
                    'F1',
                    'driver pairing',
                    'Charles Leclerc',
                    'Max Verstappen',
                    'Red Bull',
                    'car',
                ],
                hashTags: [
                    '#F1',
                    '#driverpairing',
                    '#CharlesLeclerc',
                    '#MaxVerstappen',
                    '#RedBull',
                    '#car',
                ],
                url: 'https://sarthakk24.s3.ap-south-1.amazonaws.com/sarthak_profile.jpg',
            },
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

mainRouter.post('/content', handler)

export default mainRouter
