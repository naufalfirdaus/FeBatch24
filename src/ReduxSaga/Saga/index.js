import { takeEvery,all } from "redux-saga/effects";
import * as ActionRegion from '../Constant/RegionConstant'
import { createRegion, handleRegion } from "./RegionSaga";
import * as ActionUser from '../Constant/UserConstant'
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleRegion),
        takeEvery(ActionRegion.ADD_REGION_REQUEST,createRegion),
        takeEvery(ActionUser.SIGNIN_REQ, handleSignin),
        takeEvery(ActionUser.SIGNUP_REQ, handleSignup),
        takeEvery(ActionUser.SIGNOUT_REQ,handleSignout)
    ])
}

export default watchAll