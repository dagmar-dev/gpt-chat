import { SignUp } from '@clerk/clerk-react'

import Nav from '../components/Nav'
export default function Signup() {
    return (
        <>
            <Nav />
            <div className="hero  min-h-screen bg-base-200">
                <div className=" flex flex-col lg:w-2/3 lg:gap-5 lg:justify-normal lg:flex-row-reverse">
                    <div className="text-center lg:w-1/2 p-2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card  lg:max-w-sm shadow-2xl bg-base-100">
                        <div className="flex justify-items-center justify-center lg:justify- ">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
