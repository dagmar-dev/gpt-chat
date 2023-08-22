import { motion } from 'framer-motion'

export default function MessageLoading(props) {
    if (props.loading === 'loading') {
        return (
            <div className="chat   chat-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ opacity: { delay: 1, duration: 0.2 } }}
                    className="chat-bubble whitespace-pre-line bg-base-100 "
                >
                    <span role="img" aria-label="dog">
                        🤔
                    </span>
                </motion.div>
            </div>
        )
    }
}
