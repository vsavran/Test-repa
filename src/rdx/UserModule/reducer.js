import * as USER from "./type";

const initialState = {
	token: '',
	messages:[],
	email:'',
	room:[],
	uid:'',
	selectedRoom:''
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER.LOG_IN: {
			return {...state, ...action.payload}
		}
		case USER.UPDATE_STATE:{
			return {...state, ...action.payload}
		}
		case USER.LOG_OUT:{
			return {...initialState}
		}
		default:
			return {...state}
	}

}
