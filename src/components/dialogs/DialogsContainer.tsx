import React from "react";
import {InitialStateType, SendMessageAc} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";


// function DialogsContainer(props: DialogsPropsType) {
//     const state = props.store.getState().dialogsPage
//
//     const onChangeHandler = (body: string) => {
//         props.store.dispatch(UpdateNewMessageBodyAc(body))
//     }
//     const addMessageBody = () => {
//         props.store.dispatch(SendMessageAc())
//     }
//
//
//     return (
//         <Dialogs updateNewMessageBody={onChangeHandler} sendMessage={addMessageBody} dialogsPage={state}/>
//     )
// }

type MapStatePropsType = {
    dialogsPage: InitialStateType

}
type MapDispatchPropsType = {
    addMessageBody:(newMessageBody: any)=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
//В скобках тот тип, который принимает, за скобками тот тип, который возвращает(Так типизируется весь mapStateToProps)
//Что бы типизировать наш стейт, нужно типизировать нашу пачку редьюсеров
//А что бы типизировать данные на выходе , нужно забрать тип у инициализационного стейта в редьюсере
let mapStateToProps = (state: RootReduxStoreType):MapStatePropsType => {
    return{
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {

        addMessageBody: (newMessageBody: any) => {
            dispatch(SendMessageAc(newMessageBody))
        }
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



