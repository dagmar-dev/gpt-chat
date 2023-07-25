const openai = require('../config/openAi')

module.exports = {
    postMessage: async (req, res) => {
        const userMessage = req.body.message
        console.log(req.body)
        try {
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: `${userMessage}` },
                    {
                        role: 'system',
                        content:
                            'I am a tech support specialist and my job is to help anyone with any thechical problems no matter whats the issue',
                    },
                ],
                temperature: 1,
            })
            res.json(completion.data.choices[0].message)
            console.log(completion.data.choices[0].message)
        } catch (error) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            } else {
                console.log(error.message)
            }
        }
    },
}
