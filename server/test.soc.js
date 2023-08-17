io.on('connection', (socket) => {
    console.log(`New connection\n ID: ${socket.id}`)
    socket.emit('response', {
        text: 'Hello human. Feel free to ask me anything.',
        isSent: false,
        sender: robotUser,
        time: new Date().toLocaleString(),
    })
})
    socket.on('disconnect', () => {
        axios({
            method: 'delete',
            'Content-Type': 'application/json',
            url: robotUrl,
            data: {
                userid: socket.id,
            },
        })
            .then((resp) => {
                console.log(`Deleted history for ${socket.id}`)
            })
            .catch((error) => {})
    })
    socket.on('message', (data) => {
        var text = ''
        axios({
            method: 'post',
            'Content-Type': 'application/json',
            url: robotUrl,
            data: {
                input: data.text,
                userid: socket.id,
            },
        })
            .then((res) => {
                text = res.data.data
                if (text == undefined) {
                    console.log('No response...')
                    return
                }
                responseObj = {
                    text: text,
                    isSent: false,
                    sender: robotUser,
                    time: new Date(),
                }
                console.log('emitting response')
                console.log(responseObj)
                socket.emit('response', responseObj)
            })
            .catch((error) => {
                console.log(error)
            })
    })

