import { create } from 'zustand'

const store = (set) => ({
    messages: [
        {
            role: 'system',
            content:
                'You are a Therapist/Psychologist that is extremely empathic you listen and try to comfort everyone you give great suggestions in short messages and try to make everyone have a satisfying experience you are the best psychologist/therapist that tryies to help everyone',
        },
        {
            role: 'assistant',
            content:
                'Welcome lets talk',
        },
        // ,
    ],
    savedMessages: [
        {
            title: '',
        },
    ],

    alert: [
        {
            response: '',
            message: '',
        },
    ],
    severStatus: [
        {
            status: '',
        },
    ],
    updateStatus: (status, state) =>
        set((store) => ({
            severStatus: [...store.severStatus, { status, state }],
        })),

    login: true,
    loginUser: () =>
        set((state) => ({
            login: (state.login = null),
        })),
    updateSavedMessages: (title, role, content, state) =>
        set((store) => ({
            savedMessages: [
                ...store.savedMessages,
                { title, role, content, state },
            ],
        })),

    addMessage: (role, content, state) =>
        set((store) => ({
            messages: [...store.messages, { role, content }],
        })),

    deleteMessages: () =>
        set((store) => ({
            messages: [...(store.messages = [])],
        })),
})

export const useStore = create(store)
