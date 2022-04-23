import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import myOrderReducer from './myOrderReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  myOrder: myOrderReducer,
});

export default rootReducer;