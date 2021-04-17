import {getAxiosInstanceAuth,getAxiosInstanceApi} from "./api";


export const loginApi = (user, callback) => {
    getAxiosInstanceAuth().post("login", user)
        .then(res => {
            const data = res.data
            console.log(res)
            callback(true, data)
        }).catch(e => {
        console.log(e)
        callback(false, e.response.data.message)

    })
}


export const registerApi = (user,callback) => {
    getAxiosInstanceAuth().post("register", user)
        .then(res => {
            const data = res.data
            callback(true,data)
        }).catch(e=>{
            callback(false,e.response.data.message)

    })
}


export const uploadUserPhoto=(photo,callback)=>{
    getAxiosInstanceApi().post("uploadUserPhoto",photo)
        .then(res=>{
            const data=res.data
            callback(true,data)
        }).catch(e=>{
            callback(false,e.response.data.message)
    })


}
// export const getHashTag=(callback)=>{
//     getAxiosInstanceAuth().get("https://twitterapi.liara.run/api/getAllHashTags")
//         .then(res=>{
//             const data=res.data
//             callback(true,data)
//
//
//         }).catch(error=>{
//             callback(false,error)
//         console.log(error)
//     })
// }
// export const getUsers=(callback)=>{
//     getAxiosInstanceAuth().get("https://twitterapi.liara.run/api/getAllUser")
//         .then(res=>{
//             const data=res.data
//             callback(true,data)
//
//
//         }).catch(error=>{
//             callback(false,error)
//         console.log(error)
//     })
// }