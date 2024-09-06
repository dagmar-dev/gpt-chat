import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js'
const queryClient = new QueryClient()

posthog.init(import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <PostHogProvider client={posthog}>
                    <App />
                </PostHogProvider>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
