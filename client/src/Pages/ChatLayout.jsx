import ChatArea from '../components/ChatArea'
import Messages from '../components/SavedMessages'



export default function Layout() {

  return (
    <section className='h-screen flex gap-3 justify-center items-center w-full'>
      <Messages/>
      <ChatArea/>
    </section>

  )
}
