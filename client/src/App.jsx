import {Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ChatLayout from './Pages/ChatLayout'
import LandingLayout from './Pages/LandingLayout'
import Signin from './Pages/SignIn'
import Signup from './Pages/Signup'
import Error404 from './components/Error404'
// import ProtectedRoute from './features/auth/ProtectedRoute'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from '@clerk/clerk-react'

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function PublicPage() {
    return <LandingLayout />
}
function ProtectedPage() {
    return <ChatLayout />
}

function App() {
    const navigate = useNavigate()
    return (
        <div className="max-h-screen flex flex-col items-center">
            

            <ClerkProvider
                publishableKey={clerkPubKey}
                navigate={(to) => navigate(to)}
            >
                <Routes>
                    <Route path="/" element={<PublicPage />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/chat" element={<>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>} />
                </Routes>
            </ClerkProvider>
        </div>
    )
}
export default App
