import {AnimatePresence,motion} from "framer-motion"




export default function Response(props) {
    return (
        
        <div className="chat   chat-start">

        
  <motion.div 
  initial={{ opacity:0, scale:0}}
  animate={{ opacity:1, scale:1 }}
  transition={{ opacity: { duration:0.2 }}}
  
  className="chat-bubble whitespace-pre-line bg-base-100 "><p>{props.message}</p>
  </motion.div>
  
</div>


    )
}
