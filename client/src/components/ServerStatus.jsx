import { useStore } from '../app/store'

export default function ServerStatus() {
    const serverStatus = useStore((store) => store.severStatus)
    
    const status = serverStatus[serverStatus.length - 1]
    if (status.status === 'connected') {
        return <span className="bg-success rounded-xl h-3 w-3 mx-4"></span>
    } else if (status.status === 'processing') {
        return <span className="bg-accent rounded-xl h-3 w-3 mx-4"></span>
    } else if (status.status === 'disconnected') {
        return <span className="bg-error rounded-xl h-3 w-3 mx-4"></span>
    }
}
