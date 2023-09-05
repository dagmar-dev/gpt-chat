import SavedMessage from './SavedMessage'
import { useStore } from '../app/store'
import NewChat from './NewChat'
import SaveMessagesModal from './SaveMessagesModal'
import Alert from './Alert'

export default function Messages() {
    const savedMessages = useStore((store) => store.savedMessages)

    return (
        <section className="bg-neutral gap-1 md:flex flex-col items-center justify-between p-4  md:w-1/5 w-full hidden h-full">
            <ul className="w-full h-full flex flex-col items-center">
                {savedMessages
                    .map((savedMessages, index) => {
                        if (savedMessages.title === ''){
                            return (
                                <SavedMessage
                                    title='No Messages'
                                    key={index}
                                />
                            )
                        }else return (
                            <SavedMessage
                                title={savedMessages.title}
                                key={index}
                            />
                        )
                    })
                    .reverse()}
            </ul>
            <Alert />
            <NewChat />
            
            <SaveMessagesModal />
        </section>
    )
}
