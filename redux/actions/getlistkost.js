import * as type from '../types'
import axios from 'axios'

export const getDataKost = () => ({
    type : type.GET_LIST_KOST,
    payload : axios.get('https://mamikos.herokuapp.com/api/v1/listkost')
})