import { call, put, takeEvery } from 'redux-saga/effects'
const Api = {}

function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (error) {
      yield put({type: "USER_FETCH_FAILED", message: error.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}




export default mySaga;