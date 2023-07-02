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
                title: 'The 2023 Formula 1 Season: A Season of Freshness and Excitement',
                description:
                    "The 2023 Formula 1 season is set to be one of the most exciting in recent years. With new regulations in place, a new generation of cars, and a new title sponsor, there is a sense of freshness and excitement around the sport. The new cars are expected to be faster and more challenging to drive, which should lead to closer racing and more overtakes. The season will start in Bahrain on March 20, and it will end in Abu Dhabi on November 20. The drivers' championship is expected to be a closely contested affair, with Max Verstappen, Charles Leclerc, and Lewis Hamilton all in contention for the title. The constructors' championship is also expected to be close, with Mercedes, Ferrari, and Red Bull all vying for the top spot. The 2023 Formula 1 season is sure to be an exciting one, and it promises to be a season that will be remembered for years to come.",
                caption:
                    'The 2023 Formula 1 season brings a new era of excitement and competition.',
                tags: [
                    'Formula 1',
                    '2023',
                    'season',
                    'excitement',
                    'regulations',
                    'cars',
                    'title sponsor',
                    'racing',
                    'overtakes',
                    'Bahrain',
                    'Abu Dhabi',
                    "drivers' championship",
                    'Max Verstappen',
                    'Charles Leclerc',
                    'Lewis Hamilton',
                    "constructors' championship",
                    'Mercedes',
                    'Ferrari',
                    'Red Bull',
                ],
                hashtags: [
                    '#Formula1',
                    '#2023Season',
                    '#Excitement',
                    '#Regulations',
                    '#NewCars',
                    '#TitleSponsor',
                    '#Racing',
                    '#Overtakes',
                    '#Bahrain',
                    '#AbuDhabi',
                    '#DriversChampionship',
                    '#MaxVerstappen',
                    '#CharlesLeclerc',
                    '#LewisHamilton',
                    '#ConstructorsChampionship',
                    '#Mercedes',
                    '#Ferrari',
                    '#RedBull',
                ],
                url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-yUV2ICUMaNhirZLDkytoNMts/user-BRCrD2gHcFTrOBCgZbMt1OSK/img-8L1hI0NtzOzmCjrF7zMgRvLj.png?st=2023-07-01T22%3A30%3A26Z&se=2023-07-02T00%3A30%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-01T20%3A26%3A16Z&ske=2023-07-02T20%3A26%3A16Z&sks=b&skv=2021-08-06&sig=klCN4aM0V3ibRWZUOg7ffLL5Vl4bZTlrp%2BvFeJre88Q%3D',
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
