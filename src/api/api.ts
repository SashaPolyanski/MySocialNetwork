import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "fd8c9e33-eec7-499b-a85e-13563189e1d7"
    },
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
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
    auth(){
        return instance.get(`auth/me`)
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




