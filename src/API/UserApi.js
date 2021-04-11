import axios from "axios";
import {PATHS} from "./PATHS";

const {BASE_URL, AUTH, SIGN_IN, SIGN_UP, FIND_USERS, ROOM, MESSAGES} = PATHS

class UserApi {
	signIn = (params) => axios.post(`${BASE_URL}${AUTH}/${SIGN_IN}`, {...params})
	signUp = (params) => axios.post(`${BASE_URL}${AUTH}/${SIGN_UP}`, {...params})
	getUserData = (token) => axios.get(`${BASE_URL}`, {headers: {"authorization": token}})
	findUsers = (params, token) => axios.post(`${BASE_URL}${FIND_USERS}`, {...params}, {headers: {"authorization": token}})
	updateRoom = (params, token) => axios.get(`${BASE_URL}${ROOM}/${params.id}`, {headers:{"authorization": token}})
	deleteRoom = (params, token) => axios.delete(`${BASE_URL}${ROOM}/${params.id}`, {headers:{"authorization": token}})
	deleteMessage =(params, token)=> axios.delete(`${BASE_URL}${MESSAGES}/${params.id}`, {headers:{"authorization": token}})
}

export default new UserApi()
