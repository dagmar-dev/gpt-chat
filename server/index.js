const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

app.use(cors())

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('gpt server')
})

app.post('/', async (req, res) => {
    const userMessage = req.body.message
    console.log(req.body)
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-0613',
        messages: [
            { role: 'user', content: `${userMessage}` },
            { role: 'system', content: 'i am a bartender that sticks to the role of a bartender' },
        ],
    })
    res.json(completion.data.choices[0].message)
    console.log(completion.data.choices[0].message)
})

app.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
