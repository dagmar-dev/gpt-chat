import { create } from 'zustand'

const store = (set) => ({
    messages: [
        {
            role: 'system',
            content:
                'I am a Therapist/Psychologist that will help and comfort anyone when needed my answers are short and just what the user need i am great with helping people with mental health problems',
        },
        {
            role: 'assistant',
            content:
                'Hi i am your Therapist / Psychologist, how can i help you today? ',
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
