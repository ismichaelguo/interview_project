// export const createUser = (user)=>{
//     console.log("222",user)
//     return{
//         type:"CREATE_USER",
//         payload:user,
//     }
// }
import { createAction,  } from '@reduxjs/toolkit'

export const createUser = createAction('CREATE_USER', function prepare(user) {
  return {
    payload: {
      user,
    },
  }
})