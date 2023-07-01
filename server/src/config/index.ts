require('dotenv').config()
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export default {
    port: parseInt(process.env.PORT) || 5050, // PORT
    dbURL: process.env.MONGODB_URI, // Mongo URI
    dbName: process.env.MONGODB_NAME, // Database Name
    jwtSecret: process.env.JWT_SECRET, // JWT Secret
    awsID: process.env.AWS_ACCESS_KEY_ID, // AWS Access Key
    awsKey: process.env.AWS_SECRET_ACCESS_KEY, // AWS Secret Access Key
    awsRegion: process.env.AWS_DEFAULT_REGION, // AWS Region
    logs: {
        level: process.env.LOG_LEVEL || 'silly', // Logger Level
    },
    api: {
        prefix: '/api', // API Prefix
    },
}
