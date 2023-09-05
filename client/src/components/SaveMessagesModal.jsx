import { useStore } from '../app/store'
import { useState } from 'react'

export default function SaveMessagesModal(state) {
    const [showModal, setShowModal] = useState(false)
    const [Title, setTitle] = useState('')
    const savedMessages = useStore((store) => store.savedMessages)
    const deleteMessages = useStore((store) => store.deleteMessages)
    const messages = useStore((store) => store.messages)
    const addMessage = useStore((store) => store.addMessage)

    const saveNewChat = useStore((store) => store.updateSavedMessages)
    

const handleChange = (e) => {
    setTitle(e.target.value)
}
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        saveNewChat(Title, 'user', messages, state)
        setTitle('')
        deleteMessages(state)
        addMessage('assistant', 'Welcome to our tech support service.', state)
        console.log(savedMessages)
        }
    }


    const saveChat = () => {
        saveNewChat(Title, 'user', messages, state)
        deleteMessages(state)
        setTitle('')
        addMessage('assistant', 'Welcome to our tech support service.', state)
        console.log(savedMessages)
    }

    return (
        <>
            <button
                className="bg-primary-focus w-5/6 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Save Messages
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Save Messages
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <input
                                        type="text"
                                        placeholder='Title'
                                        onChange={handleChange}
                                        onKeyDown={handleKeyDown}
                                        className="input input-bordered w-full bg-neutral"
                                        value={Title}
                                    />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={
                                            (() => setShowModal(false),
                                            saveChat)
                                        }
                                    >
                                        Save Messages
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
