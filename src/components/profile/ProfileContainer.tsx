import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../redux/storeReducer";
import {getUserThunkCreator} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userID: string
}
type RouterPathType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<RouterPathType> {


    componentDidMount() {

        //Узнать на саппорте как работает эти методы
        let userId = this.props.match.params.userID
        this.props.getUserThunkCreator(+userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
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

    }
    isAuth: boolean
}
type mapDispatchPropsType = {
    getUserThunkCreator: (userId:number) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: RootReduxStoreType): mapStatePropsType => {
    return {
        //Нужно брать в стейте только то, что нужно данной компоненте, что бы лучше происходила перерисовка компоненты
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth,
    }
}
//Оборачивает нашу компоненту контейнерной компонентой(еще одной) и с помощью withRouter считывает данные с url строки
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//Connect создает на выходе контейнерную компоненту, берет на себя грязную работу
export default connect(mapStateToProps, {getUserThunkCreator})(WithUrlDataContainerComponent)
