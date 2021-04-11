import * as ROOM from "./type";

const initialState = {
    socketMessages: [],
    selectedRoom: ''
}

export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOM.UPDATE_DATA: {
            return {...state, ...action.payload}
        }
        case ROOM.UPDATE_SOCKET_MESSAGES: {
            return {...state, socketMessages: [...state.socketMessages, action.payload]}
        }
        case ROOM.DELETE_MESSAGE: {
            return {...state, socketMessages: state.socketMessages.filter(mess => mess._id !== action.payload.id)}
        }
        case ROOM.UPDATE_MESSAGE: {
            const socketMessages = state.socketMessages.map(mess => mess._id === action.payload.id ? {
                ...mess,
                message: action.payload.message
            } : mess)
            return {...state, socketMessages}
        }
        default:
            return {...state}
    }

}
