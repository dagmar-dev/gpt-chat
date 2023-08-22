import Message from './Message'
import Response from './Response'
import MessageBox from './MessageBox'
import MessageLoading from './MessageLoading'
import { useStore } from '../app/store'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { socket } from '../web socket/socket'

export default function ChatArea(state) {
    const [fooEvents, setFooEvents] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('Type here')
    const [loading,setLoading] = useState('')

    const messages = useStore((store) => store.messages)

    const addMessage = useStore((store) => store.addMessage)


    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const handleClick = () => {
        if (newMessage === '') {
            setErrorMsg('Please Enter a Message')
        } else {
            addMessage('client', newMessage, state)
            submitMessage()
            setNewMessage('')
            setErrorMsg('Type Here')
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
            }
        }
    }

     const userMessage = {
         role: 'user',
         content: newMessage,
     }
    const conversation = [...messages,userMessage]
   

    const submitMessage = () => {
        socket.emit(
            'messages', conversation)
        console.log(conversation)
    }
    

    useEffect(() => {
        function onConnect() {
            console.log('connected')

            socket.on('response', (data) => {
                addMessage('assistant', data, state)
            })
            
        }

        socket.on('loading', (data) => {
            setLoading(`${data}`)
        })

        
        

        function onDisconnect() {
            console.log('disconnected')
        }

        function onFooEvent(value) {
            setFooEvents((previous) => [...previous, value])
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('foo', onFooEvent)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('foo', onFooEvent)
        }
    }, [addMessage,state,setLoading,loading])

    return (
        <section className="h-full flex flex-col items-center  bg-neutral-focus lg:w-3/6 w-full px-1 md:px-2 lg:px-4 py-2 ">
            <div className="h-full  overflow-auto px-1 py-3 w-full flex flex-col-reverse  ">
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
