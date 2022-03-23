import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType, MessageType,} from "../../redux/store";
import {DialogsPropsType} from "./DialogsContainer";


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




function Dialogs(props: DialogsPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }
    const addMessageBody = () => {
        props.addMessageBody()
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}
                </div>
                <div className={s.messages}>
                    {props.dialogsPage.messages.map((message) => <Message key={message.id} message={message.message}/>)}
                    <textarea value={props.dialogsPage.newMessageBody} onChange={onChangeHandler}/>
                    <button onClick={addMessageBody}>send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs