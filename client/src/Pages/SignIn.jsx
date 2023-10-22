import { SignIn } from '@clerk/clerk-react'
import Nav from '../components/Nav'
export default function Page() {
    return (
        <>
            <Nav />
            <SignIn />
        </>
    )
}