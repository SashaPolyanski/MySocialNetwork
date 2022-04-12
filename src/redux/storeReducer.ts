import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

//Делаем прослойку applyMiddleware(thunkMiddleware), что бы диспатч мог принимать функцию, thunk, yarn add redux-thunk
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type StoreType = typeof store

export type RootReduxStoreType = ReturnType<typeof rootReducer>
