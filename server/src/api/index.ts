import { Router } from 'express'
import healthCheckRoute from './healthcheck'

export default (): Router => {
    const app = Router()
    //TODO: add routes here...
    app.use('/health', healthCheckRoute)
    return app
}
