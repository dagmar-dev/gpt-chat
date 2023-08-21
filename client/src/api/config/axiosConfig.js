import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gpt-chat-front.onrender.com',
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response?.status

    // logging only errors that are not 401
    if (statusCode && statusCode !==401){
        console.log(error)
    }
    return Promise.reject(Error)
}

// registering the custom error handler to the
// "api" axios instance

api.interceptors.response.use(undefined,(error)=>{
    return errorHandler(error)
})