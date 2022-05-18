import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "35c65667-9bba-418f-a071-39858a26f8f6"
    },
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            }
        ).then(response => {
            return response.data
        })

    },

    follow(userID: number) {
        return instance.post(`follow/${userID}`)
    },
    unFollow(userID: number) {
        return instance.delete(`follow/${userID}`)
    },

    getProfile(userId: number){
        return profileAPI.getProfile(userId)
    },
}
 export  const profileAPI = {
        getProfile(userId: number){
            return instance.get(`profile/ ` + userId)
        },
        getStatus(userId: number) {
            return instance.get('/profile/status/' + userId)
        },
        updateStatus (status: string) {
            return instance.put('/profile/status/', {status})
        }
    }
export const authMe = {
    auth(){
        return instance.get(`/auth/me`)
    },
    login(email:string, password: string, rememberMe = false, isAuth = true) {
        return instance.post('/auth/login', {email, password, rememberMe, isAuth})
    },
    logout(){
        return instance.delete('/auth/login')
    }
}




