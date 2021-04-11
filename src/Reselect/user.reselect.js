class UserReselect {
	getToken = (state) => state.user.token
	getRooms = (state) => state.user.room
	getMessages =(state)=>state.user.messages
	getUserId = (state)=>state.user.uid
	getUserName =(state)=>state.user.name
}

export default new UserReselect()