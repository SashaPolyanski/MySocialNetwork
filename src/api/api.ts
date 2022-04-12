import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "74611945-26c9-4452-ab81-a7973cdb2ec9"
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
        return instance.get(`profile/ ` + userId)
    },
}




