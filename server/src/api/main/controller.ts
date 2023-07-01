import generateContent from '../../services/content.service'
import generateImage from '../../services/image.service'

const generate = async (description: string) => {
    try {
        const content = await generateContent(description)
        const imageUrl = await generateImage(description)

        return {
            ...content,
            url: imageUrl,
        }
    } catch (error) {
        throw error
    }
}

export default generate
