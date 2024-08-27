import Message from './Message'
import Response from './Response'
import MessageBox from './MessageBox'
import MessageLoading from './MessageLoading'
import { useStore } from '../app/store'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { socket } from '../web socket/socket'


export default function ChatArea(state) {
    const [newMessage, setNewMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('Type here')
    const [loading, setLoading] = useState('')

    const messages = useStore((store) => store.messages)
    const serverStatus = useStore((store) => store.severStatus)
    const status = serverStatus[serverStatus.length - 1]

    const addMessage = useStore((store) => store.addMessage)
    const updateStatus = useStore((store) => store.updateStatus)

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const handleClick = () => {
        if (newMessage === '') {
            setErrorMsg('Please Enter a Message')
        } else {
            addMessage('user', newMessage, state)
            console.log(serverStatus)
            submitMessage()
            setNewMessage('')
            setErrorMsg('Type Here')
            updateStatus('processing', state)
        }
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (newMessage === '') {
                setErrorMsg('Please Enter a Message')
            } else {
                addMessage('user', newMessage, state)
                submitMessage()
                setNewMessage('')
                setErrorMsg('Type Here')
                updateStatus('processing', state)
            }
        }
    }

    const userMessage = {
        role: 'user',
        content: newMessage,
    }

    const submitMessage = () => {
        if(status === 'disconnected'){
            return 'server disconnected'
        }else socket.emit('messages', [...messages, userMessage])
        
    }

    useEffect(() => {
        socket.connect()
        socket.on('connect', onConnect)
        function onConnect() {
            console.log('connected')
            updateStatus('connected', state)
            socket.on('response', (data) => {
                addMessage('assistant', data)
                updateStatus('connected', state)
            })
            socket.on('loading', (data) => {
                setLoading(`${data}`)
            })
        }
        
        

        

        function onDisconnect() {
            console.log('disconnected')
            updateStatus('disconnected', state)
        }
        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
        }
    }, [addMessage, state, setLoading, loading, updateStatus])

    return (
        <section className=" h-full  h-dvh flex flex-col items-center  bg-neutral-focus lg:w-3/6 w-full px-1 md:px-2 lg:px-4 py-1 pt-12 ">
            <div className="h-full h-dvh overflow-auto px-1 py-3 w-full flex flex-col-reverse pt-5 ">
                <AnimatePresence initial={false}>
                    <MessageLoading loading={loading} />
                    {messages
                        .map((messages, index) => {
                            if (messages.role === 'user') {
                                return (
                                    <Message
                                        key={index}
                                        message={messages.content}
                                    />
                                )
                            } else if (messages.role === 'assistant') {
                                return (
                                    <Response
                                        key={index}
                                        message={messages.content}
                                    />
                                )
                            }
                        })
                        .reverse()}
                </AnimatePresence>
            </div>

            <MessageBox
                handleClick={handleClick}
                handleChange={handleChange}
                handleKeyDown={onKeyDown}
                errorPlaceholder={errorMsg}
                newMessage={newMessage}
            />
        </section>
    )
}
