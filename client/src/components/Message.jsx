import {motion} from "framer-motion"

export default function Message(props) {

    
  return (
    
    <div className="chat py-6 chat-end">
      
  <motion.div 
  initial={{ opacity:0, scale:0}}
  animate={{ opacity:1, scale:1 }}
  transition={{ opacity: { duration:0.2 }}}
  className="chat-bubble bg-base-100  ">{props.message}</motion.div>
  
</div>

  )
}
