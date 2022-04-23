export const GET_ORDER = 'GET_ORDER';
export const ADD_ORDER = 'ADD_ORDER';

export const getMyOrderAction = ( payload )=> {
    return {
        type: GET_ORDER,
        payload: payload
    }
}
export const addMyOrderAction = ( payload )=> {
    return {
        type: ADD_ORDER,
        payload: payload
    }
}
