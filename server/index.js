const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
)

app.get('/', (req, res) => {
     res.json({ msg: 'This is CORS-enabled for only example.com.' })
})

app.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
