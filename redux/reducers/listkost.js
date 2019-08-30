import * as type from '../types';

const initialState = {
    data : ["data kosong"],
    isLoading : true,
    isError : false,
}

export default function ListKost(state = initialState,action){
    switch(action.type){
        case type.GET_LIST_KOST:
            return {
                ...state,
                data : action.payload
            }
        case type.GET_LIST_KOST_FULFILLED:
            return {
                ...state,
                isLoading : false,
                data : action.payload.data
            }
        case type.GET_LIST_KOST_REJECTED:
        return {
            ...state,
            isError : true,
            isLoading : false,
            data : "server error mohon refresh"
        }
        default :
            return state
    }
}