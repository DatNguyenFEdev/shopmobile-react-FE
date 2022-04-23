import {GET_ORDER,ADD_ORDER} from "../actions/myOrderActions"

const initialState = {
    myOrder: []
}

const myOrderReducer = (state = initialState, action)=> {
    switch(action.type) {
        case GET_ORDER: {
            const newOrder = state.myOrder
            return {
                myOrder: newOrder
            }
        }
        case ADD_ORDER: {
            const newOrder = state.myOrder
            console.log(action.payload);
            return {
                myOrder: [...newOrder, action.payload]
            }
        }
        default: {
            return {
              ...state,
            }
          }

    }
}

export default myOrderReducer;