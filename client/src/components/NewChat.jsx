import { useStore } from '../app/store'

export default function NewChat(state) {
    const deleteMessages = useStore((store) => store.deleteMessages)
    
    const newChat = () => {
        deleteMessages(state)
        
    }
    return (
        <button
            onClick={newChat}
            className="bg-info w-5/6 text-center r-5 p-1 hidden justify-center lg:flex rounded"
        >
            New Chat
        </button>
    )
}
