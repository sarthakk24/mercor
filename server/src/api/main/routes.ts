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
                hashtags: [
                    '#F1',
                    '#driverpairing',
                    '#CharlesLeclerc',
                    '#MaxVerstappen',
                    '#RedBull',
                    '#car',
                ],
                url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-yUV2ICUMaNhirZLDkytoNMts/user-BRCrD2gHcFTrOBCgZbMt1OSK/img-zzEzWbiP5QN2vUXHkTuyMA43.png?st=2023-07-01T20%3A38%3A02Z&se=2023-07-01T22%3A38%3A02Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-01T20%3A25%3A44Z&ske=2023-07-02T20%3A25%3A44Z&sks=b&skv=2021-08-06&sig=eqDhMQkrriO1RjpRMGx0f9%2BhbJPKoGWKyiV0KkzM%2BfM%3D',
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
