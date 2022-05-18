import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType, MessageType,} from "../../redux/store";
import {DialogsPropsType} from "./DialogsContainer";
import {FormSubmitHandler} from "redux-form";


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



    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                                           name={dialog.name}/>)}
                </div>
                <div className={s.messageItem}>{props.dialogsPage.messages.map((message) => <Message key={message.id}
                                                                                                     message={message.message}/>)}</div>

                <AddMessageForm />

            </div>
        </div>
    )
}


export default Dialogs


const AddMessageForm = (props: any) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.messages}>
                <input  name={'newMessageBody'}
                       placeholder={'Enter your message'}/>
                <div/>

                <button>send</button>
            </div>
        </form>

    )

}
