import Message from './Message'
import Response from './Response'
import MessageBox from './MessageBox'
import axios from 'axios'
import { useStore } from '../app/store'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function ChatArea(state) {
    const [newMessage, setNewMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('Type here')

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
                addMessage('client', newMessage, state)
                submitMessage()
                setNewMessage('')
                setErrorMsg('Type Here')
                console.log(messages)
            }
        }
    }

    const submitMessage = () => {
        // const message = messages[messages.length-1].message
        const message = newMessage

        axios
            .post('https://gpt-server-c3mk.onrender.com/message', {
                message: message,
            })

            .then(function (response) {
                addMessage('assistant', response.data.content, state)
                console.log(messages)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    

    return (
        <section className="h-full md:flex flex-col items-center  bg-neutral-focus lg:w-3/6 w-full px-1 md:px-2 lg:px-4 py-2 hidden">
            <div className="h-full  overflow-auto px-1 py-3 w-full flex flex-col-reverse  ">
                <AnimatePresence initial={false}>
                    {messages
                        .map((messages, index) => {
                            if (messages.role === 'client') {
                                return (
                                    <Message
                                        key={index}
                                        message={messages.message}
                                    />
                                )
                            } else {
                                return (
                                    <Response
                                        key={index}
                                        message={messages.message}
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
