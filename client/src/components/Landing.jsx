import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAwake } from '../api/newMessage'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


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
                    <h1 className="text-5xl font-bold">
                        Your Confidential Companion
                    </h1>
                    <p className="py-6">
                    Instantly connect with your empathetic AI friend. Share
                        your deepest thoughts and emotions, knowing you're not
                        alone. Receive personalized advice for coping strategies
                        to help you through tough times. Trust MindMate as a
                        confidential companion for your mental health journey.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                        <SignedOut>
                            <Link
                                to="/signup"
                                className="btn btn-primary max-w-fit"
                            >
                                Get Started
                            </Link>
                        </SignedOut>
                        <SignedOut>
                            <Link
                                to="/login"
                                className="btn btn-secondary max-w-fit"
                            >
                                Login
                            </Link>
                        </SignedOut>
                    </div>

                    <SignedIn>
                        <Link
                            to="/chat"
                            className="btn btn-secondary max-w-fit"
                        >
                            Lets Talk
                        </Link>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}
