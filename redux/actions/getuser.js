import * as type from '../types'
import axios from 'axios'

export const getDataUser = (username,password) => ({
    type : type.GET_USER,
    payload : axios.post("http://localhost:8080/api/v1/login",{
        username : username,
        password : password
    })
})