import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string)=>void
}


const ProfileStatus = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onEditModeHandler = () => {
        setEditMode(true)
    }
    const offEditModeHandler = () => {
        setEditMode(false)
        props.updateStatus(status)

    }


    return (
        <div>
            {!editMode ? <div onDoubleClick={onEditModeHandler}>{!props.status ? <div>Введите ваш статус</div> : props.status}</div> :
                <input autoFocus onChange={changeStatus} value={status} onBlur={offEditModeHandler} type="text"/>}
        </div>


    );
};

export default ProfileStatus;