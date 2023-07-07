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
        origin: 'https://gpt-chat-front.onrender.com',
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
    try{
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: `${userMessage}` },
            { role: 'system', content: 'I am a tech support specialist and my job is to help anyone with any thechical problems no matter whats the issue' },
        ],
        max_tokens: 100,
        temperature:1,
        
    })
    res.json(completion.data.choices[0].message)
    console.log(completion.data.choices[0].message)
    } catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
})

app.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
