import React from 'react';
import {useSelector} from "react-redux";
import {RootReduxStoreType, StoreType} from "../../redux/storeReducer";
import {UsersType} from "../../redux/usersReducer";

const Friends = () => {
    const followedUsers = useSelector<RootReduxStoreType, Array<UsersType>>(state => state.usersPage.users)
    return (
        <div>
            {/*сохранять всех в локал стораж*/}
            {
                followedUsers.map(f => {
                    debugger
                    return(
                        f.followed && <div>{f.name}</div>
                    )
                })
            }
        </div>
    );
};

export default Friends;