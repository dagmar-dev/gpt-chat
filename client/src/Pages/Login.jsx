import Alert from '../components/Alert'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../app/store'

export default function Login() {
    const navigate = useNavigate()
    const login = useStore((store) => store.login)
    const loginUser = useStore((store) => store.loginUser)
    const handleLogin = () => {
      loginUser(true)
      console.log(login)
    }
    
    return (
        <div className="hero min-h-screen flex flex-col justify-around bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className="btn btn-primary my-1"
                                onClick={() => navigate('/home')}
                            >
                                Login
                            </button>

                            <button className="btn btn-primary my-1">
                                Sign up
                            </button>
                            <button
                                className="btn btn-primary my-1"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Alert/>
        </div>
    )
}
