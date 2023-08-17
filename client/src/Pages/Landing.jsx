import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAwake } from '../api/newMessage'



export default function Landing() {
    // const useReactQuerySubscription = () => {
    //    const queryClient = useQueryClient()
    //     useEffect(() => {
    //         const socket = io('https://http://localhost:3300/')
    //         socket.on('connect', () => {
    //             console.log(socket.id) // x8WIv7-mJelg7on_ALbx
    //         })

    //         socket.on('disconnect', () => {
    //             console.log(socket.id) // undefined
    //         })
    //     }, [])
    // }

    
      
   
    const { isLoading, isError, error } = useQuery({
        queryKey: ['alive'],
        queryFn: getAwake,
    })

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to="/signup" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
