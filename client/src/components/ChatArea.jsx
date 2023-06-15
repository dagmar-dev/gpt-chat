import Message from "./Message"
import Response from "./Response"
import MessageBox from "./MessageBox"
import { useSelector } from "react-redux"
import axios from 'axios'




const submitMessage = () => {
  const conversation = useSelector((state)=> state.conversation)
  const message = conversation[conversation.length - 1].message
  console.log(message)
axios
    .post('http://localhost:3000', {
        message:message
    })
    
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
}



export default function ChatArea() {
  const messages = useSelector((state)=> state.messages)
submitMessage()
  return (
    
    <section className="container">
      
      {messages.map((messages,index) => {
       
       if (messages.usr === 'client') {
        return <Message
        key={index}
        message={messages.message}
        />
       }else {return <Response
        key={index}
        message={messages.message}
        />}   
})}
        
         <MessageBox
        //  submit={submitMessage}
         
         />
    </section>
  )
}
