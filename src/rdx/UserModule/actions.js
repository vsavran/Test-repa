import {LOG_IN, LOG_OUT, UPDATE_STATE} from "./type";

export const logInAction = (payload) => ({
	type: LOG_IN,
	payload
})
export const logOutAction =(payload)=>({
	type: LOG_OUT
})
export const updateState = (payload) => ({
	type: UPDATE_STATE,
	payload
})
