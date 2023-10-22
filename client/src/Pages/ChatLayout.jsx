import ChatArea from '../components/ChatArea'
import Messages from '../components/SavedMessagesArea'

import Nav from '../components/Nav'

export default function Layout() {
  

  
  return (
      <section className="h-screen flex-col flex gap-3 justify-center items-center w-full">
          {/* <Messages/> */}
          <Nav />
          <ChatArea />
      </section>
  )
}
