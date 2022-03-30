export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

export const  getProductAction = ( payload )=> {
    return {
        type: GET_PRODUCT,
        payload: payload
    }
}