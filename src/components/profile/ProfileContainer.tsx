import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {getUserStatus, getUserThunkCreator, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userID: string
}
type RouterPathType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<RouterPathType> {


    componentDidMount() {

        //Узнать на саппорте как работает эти методы
        let userId = this.props.match.params.userID
        if(!userId) {
            userId = '22360'
        }
        this.props.getUserThunkCreator(+userId)
        this.props.getUserStatus(+userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}


type mapStatePropsType = {

    profile: {
        aboutMe: string,
        photos: {
            small: string
            large: string
        }
        fullName: string


    }
    status: string


    isAuth: boolean
}
type mapDispatchPropsType = {
    getUserThunkCreator: (userId: number) => void
    getUserStatus: (userId: number)=> void
    updateUserStatus: (status: string)=>void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        //Нужно брать в стейте только то, что нужно данной компоненте, что бы лучше происходила перерисовка компоненты
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserThunkCreator, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

//Оборачивает нашу компоненту контейнерной компонентой(еще одной) и с помощью withRouter считывает данные с url строки
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//Connect создает на выходе контейнерную компоненту, берет на себя грязную работу
// export default withAuthRedirect(connect(mapStateToProps, {getUserThunkCreator})(WithUrlDataContainerComponent))
