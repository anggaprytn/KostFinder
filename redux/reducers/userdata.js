import * as type from '../types';

const initialState = {
    isLoading : false,
    isError : false,
    data : "data empty"
}

export default function UserData(state = initialState,action){
    switch(action.type){
        
        case type.GET_USER :
            return {
                ...state,
                isLoading : true,
            }
        case type.GET_USER_FULFILLED : 
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        case type.GET_USER_REJECTED :
            return{
                ...state,
                isError : 'ini error'
            }
        default :
            return state
    }
}