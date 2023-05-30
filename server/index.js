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

app.post('/', async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello world' }],
    })
    res.json(completion.data.choices[0].message)
    console.log(completion.data.choices[0].message)
})

app.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
