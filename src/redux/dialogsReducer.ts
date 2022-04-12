import {ActionsType} from "./profileReducer";


export type SendMessageType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
type MessageType = {
    id?: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}


export type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}


let initialState: InitialStateType  = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Veronika'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Denis'},
        {id: 5, name: 'Nikita'},
    ],
    messages: [
        {id: 1, message: 'Hello im Sasha'},
        {id: 2, message: 'Hello im Veronika'},
        {id: 3, message: 'Hello im Lera'},
        {id: 4, message: 'Hello im Denis'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY' : {
            //state.newMessageBody = action.body
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case 'SEND-MESSAGE' : {
            let newMessage = {id: 6, message: state.newMessageBody}
            state.newMessageBody = ''
            return {
                ...state,
                messages:[...state.messages, newMessage],
                newMessageBody: ' '
            }
        }
        default:
            return state

    }
}
export const UpdateNewMessageBodyAc = (body: string): UpdateNewMessageBodyType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body
    }
}
export const SendMessageAc = (): SendMessageType => {
    return {
        type: 'SEND-MESSAGE'
    }
}
