import { useStore } from '../app/store'

export default function NewChat(state) {
    const deleteMessages = useStore((store) => store.deleteMessages)
    const addMessage = useStore((store) => store.addMessage)
    
    const newChat = () => {
        deleteMessages(state)
        addMessage('assistant', 'Welcome to our tech support service.', state)
        
    }
    return (
        <button
            onClick={newChat}
            className="bg-info w-5/6 s text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
            New Chat
        </button>
    )
}
