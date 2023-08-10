import { create } from "zustand"

const store = (set) => ({
    messages: [
        {
            role: 'assistant',
            message: 'Welcome to our tech support service.',
        },
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

    login: true,
    loginUser: () =>
        set((state) => ({
            login: (state.login = null),
        })),
    updateSavedMessages: (title, role, message, state) =>
        set((store) => ({
            savedMessages: [
                ...store.savedMessages,
                { title, role, message, state },
            ],
        })),

    addMessage: (role, message, state) =>
        set((store) => ({
            messages: [...store.messages, { role, message, state }],
        })),

    deleteMessages: () =>
        set((store) => ({
            messages: [...(store.messages = [])],
        })),
})

export const useStore = create(store)
