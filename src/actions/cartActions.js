export const ADD_TO_CART = 'ADD_TO_CART';
export const QUANTITY_UP = 'QUANTITY_UP';
export const QUANTITY_DOWN = 'QUANTITY_DOWN';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCartAction = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}
export const quantityUp = (payload) => {
    return {
        type: QUANTITY_UP,
        payload: payload
    }
}
export const quantityDown = (payload) => {
    return {
        type: QUANTITY_DOWN,
        payload: payload
    }
}
export const removeProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload: payload,
    }
}
export const clearCart = (payload) => {
    return {
        type: CLEAR_CART,
        payload: payload,
    }
}