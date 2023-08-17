const express = require('express')
const app = express()
// const mongoose = require("mongoose")
// const passport = require("passport");
// const session = require("express-session")
const port = 3300
const cors = require('cors')
require('dotenv').config()
const connectDB = require("./config/database")
const mainRoutes =require("./routes/main")
const messagesRoutes = require("./routes/messages")
const { createServer } = require('http')
const { Server } = require('socket.io')
const httpServer = createServer(app)
const openai = require('./config/openAi')

const io = new Server(httpServer, {
    cors: {
        origin: 'https://gpt-chat-front.onrender.com',
    },
})





app.use(cors())

connectDB()

io.on('connection',  (socket)  => {
    console.log(`New connection\n ID: ${socket.id}`)
    // socket.emit('response', 
    //         // messages = [
                
                
    //         //         content=
    //         //             'I am a tech support specialist and my job is to help anyone with any thechnical problems no matter whats the issue',
    //         //     ,
    //         // ],
        
    // )
    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
    socket.on('message', async (data) => {
         try {
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content:data },
                    {
                        role: 'system',
                        content:
                            'I am a tech support specialist and my job is to help anyone with any thechnical problems no matter whats the issue',
                    },
                ],
                temperature: 1,
            })
            socket.emit(
                'response',completion.data.choices[0].message.content,
                console.log(completion.data.choices[0].message.content),
            )
            
        } catch (error) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            } else {
                console.log(error.message)
            }
        }
        
        
        // var text = ''
        // axios({
        //     method: 'post',
        //     'Content-Type': 'application/json',
        //     url: robotUrl,
        //     data: {
        //         input: data.text,
        //         userid: socket.id,
        //     },
        // })
        //     .then((res) => {
        //         text = res.data.data
        //         if (text == undefined) {
        //             console.log('No response...')
        //             return
        //         }
        //         responseObj = {
        //             text: text,
        //             isSent: false,
        //             sender: robotUser,
        //             time: new Date(),
        //         }
        //         console.log('emitting response')
        //         console.log(responseObj)
        //         socket.emit('response', responseObj)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    })
})




app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/",mainRoutes)
app.use("/",messagesRoutes)

httpServer.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
