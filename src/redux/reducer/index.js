import {combineReducers} from "redux"
import mainWindowReducer from "./mainWindowReducer"
import appReducer from "./appReducer";
import mainCardReducer from "./mainCardReducer";

export default combineReducers({
    appReducer: appReducer,
    mainWindowReducer: mainWindowReducer,
    mainCardReducer: mainCardReducer
})