import {combineReducers, createStore, applyMiddleware} from "redux";
import {userReducer} from "./UserModule/reducer";
import logger from 'redux-logger';
import {roomReducer} from "./RoomModule/reducer";

const rootReducer = combineReducers({
	user: userReducer,
	room:roomReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
export default store
