import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType, MessageType,} from "../../redux/store";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, FormSubmitHandler, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import Textarea from "../../common/FormsControls/FormsControls";


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

    const addNewMessage: FormSubmitHandler = (values: {}) => {
        console.log(values)
        props.addMessageBody((values as { newMessageBody: string }).newMessageBody)
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                                           name={dialog.name}/>)}
                </div>
                <div className={s.messageItem}>{props.dialogsPage.messages.map((message) => <Message key={message.id}
                                                                                                     message={message.message}/>)}</div>

                <AddMessageReduxForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}


export default Dialogs


const AddMessageForm = (props: any) => {
const maxLength10 = maxLengthCreator(10)
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.messages}>
                <Field  validate={[requiredField,maxLength10]} component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message'}/>
                <div/>

                <button>send</button>
            </div>
        </form>

    )

}
const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'addMessage'
})(AddMessageForm)