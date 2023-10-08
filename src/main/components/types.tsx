export type User = {
    id: string
    name: string
    avatar: string
    status: string
}

export type ChatlistProps = {
    users: User[];
}

export type Chat = {
    chatHistory: string[],
    currentChat: string // This is the first chat which is all the way from the botton.
}

export type ChatProps = {
    user: User,
    chats: Chat,
    time: string,
    isTyping: boolean
}
