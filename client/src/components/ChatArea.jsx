import Message from "./Message"
import Response from "./Response"
import MessageBox from "./MessageBox"

export default function ChatArea() {
  return (
    <section className="container">
        <Message/>
        <Response/>
        <MessageBox/>
    </section>
  )
}
