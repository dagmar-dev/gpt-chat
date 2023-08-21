import { create } from 'zustand'

const store = (set) => ({
    messages: [
        {
            role: 'system',
            content:
                'I am a tech support specialist and my job is to help anyone with any technical problems no matter whats the issue',
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
            messages: [...store.messages, { role, content}],
        })),

    deleteMessages: () =>
        set((store) => ({
            messages: [...(store.messages = [])],
        })),
})

export const useStore = create(store)
