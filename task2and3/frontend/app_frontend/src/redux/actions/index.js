export const createUser = (user)=>{
    console.log("222",user)
    return{
        type:"CREATE_USER",
        payload:user,
    }
}