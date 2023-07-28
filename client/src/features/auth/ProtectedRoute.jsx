/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'
import { useStore } from '../../app/store'

export default function ProtectedRoute({  children }) {
    const login = useStore((store) => store.login)
    if (!login) {
        return <Navigate to='login' replace />
    }
    return children ? children : <Outlet />
}
