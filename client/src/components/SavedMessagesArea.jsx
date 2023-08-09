import SavedMessage from './SavedMessage'
import { useStore } from '../app/store'
import SaveDeleteChat from './SaveDeleteChat'
import NewChat from './NewChat'

export default function Messages() {
    const savedMessages = useStore((store) => store.savedMessages)

    return (
        <section className="bg-neutral gap-1 flex flex-col items-center justify-between p-4  md:w-1/5 w-full h-full">
            
            <ul className="w-full h-full flex flex-col items-center">
                {savedMessages.map((savedMessages, index) => {
                    return (
                        <SavedMessage title={savedMessages.title} key={index} />
                    )
                }).reverse()}
            </ul>
            <NewChat />
            <SaveDeleteChat />
        </section>
    )
}
