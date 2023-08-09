import { api } from './config/axiosConfig'
import { useStore } from '../app/store'



export const getAwake = async () => {
    const response = await api.get('/')
    return response.data
}

export const postMessage = async () => {
    await api
        .post('/message', {
            message: 'hi',
        })
        .then(function (response) {
            console.log(response.data.content)
        })
        .catch(function (error) {
            console.log(error)
        })
}



