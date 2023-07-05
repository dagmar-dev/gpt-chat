

export default function Message(props) {

    
  return (
    <div className="chat  py-6 chat-end">
  <div className="chat-bubble bg-base-100  ">{props.message}</div>
</div>
  )
}
