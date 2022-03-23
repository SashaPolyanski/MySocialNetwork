import {dialogsReducer, SendMessageType, UpdateNewMessageBodyType} from "./dialogsReducer";
import {AddPostAcType, profileReducer, UpdateNewPostTextType} from "./profileReducer";


export type ActionsType = AddPostAcType | UpdateNewPostTextType | UpdateNewMessageBodyType | SendMessageType

export type MessageType = {
    id?: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 1, message: 'Hi, how are you?', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber()
    }
}

