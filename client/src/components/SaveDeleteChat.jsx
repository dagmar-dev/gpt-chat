import { useStore } from '../app/store'

export default function SaveDeleteChat(state) {
    const savedMessages = useStore((store) => store.savedMessages)
    const deleteMessages = useStore((store) => store.deleteMessages)
    const messages = useStore((store) => store.messages)

    const saveNewChat = useStore((store) => store.updateSavedMessages)

    const saveChat = () => {
        saveNewChat('a new chat', 'user',messages, state)
        console.log(savedMessages)
    }

    const clearChat = () => {
        deleteMessages(state)
    }

    return (
        <>
            <button
                onClick={saveChat}
                className='bg-primary-focus w-5/6 hidden lg:flex justify-center m-1  text-center r-5 p-1 rounded'
            >
                Save
            </button>
        </>
    )
}
