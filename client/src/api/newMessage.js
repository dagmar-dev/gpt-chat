import { api } from './config/axiosConfig'





export const getAwake = async () => {
    const response = await api.get('/')
    return response.data
}

export const postMessage = async (clientMessage) => {
    
    const response = await api
        .post('/message', {
            message: clientMessage,
        })

        return response.data.content


        // .then(function (response) {
        //     console.log(response.data.content)
        // })
        // .catch(function (error) {
        //     console.log(error)
        // })
}



