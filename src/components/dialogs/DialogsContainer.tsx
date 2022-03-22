import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {ActionsType, DialogsType, MessageType, StoreType,} from "../../redux/store";
import {SendMessageAc, UpdateNewMessageBodyAc} from "../../redux/dialogsReducer";


function DialogItem(props: DialogsType) {

    let path = '/Dialogs/' + props.id

    return (
        <div className={s.dialogItem}>
            <NavLink className={s.dialogLink} to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: MessageType) {
    return (
        <div>
            <div className={s.messageItem}>{props.message}</div>
        </div>
    )
}

type DialogsPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}


function Dialogs(props: DialogsPropsType) {
    const state = props.store.getState().dialogsPage;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewMessageBodyAc(e.currentTarget.value))
    }
    const addMessageBody = () => {
        props.dispatch(SendMessageAc())
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {state.dialogs.map((dialog: any) => <DialogItem id={dialog.id} name={dialog.name}/>)}
                </div>
                <div className={s.messages}>
                    {state.messages.map((message: any) => <Message message={message.message}/>)}
                    <textarea value={state.newMessageBody} onChange={onChangeHandler}/>
                    <button onClick={addMessageBody}>send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs