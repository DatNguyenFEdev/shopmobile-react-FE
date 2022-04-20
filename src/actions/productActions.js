export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';

export const  getProductAction = ( payload )=> {
    return {
        type: GET_PRODUCT,
        payload: payload
    }
}

export const changeProductAction = ( payload ) => {
    return {
        type: CHANGE_PRODUCT,
        payload: payload
    }
}