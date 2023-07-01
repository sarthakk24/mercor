import { Configuration, OpenAIApi } from 'openai'
import config from '../config'

const configuration = new Configuration({
    apiKey: config.openai.apiKey,
})

const openai = new OpenAIApi(configuration)

const generateContent = async (description: string) => {
    try {
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Generate description, caption, tags, hashtags for the following description ${description}`,
                },
            ],
        })

        const response =
            completion.data.choices[0].message.content.split('\n\n')

        return {
            description: response[0],
            caption: response[1],
            tags: response[2],
            hashtags: response[3],
        }
    } catch (error) {
        throw error
    }
}

export default generateContent
