import {DELETE_MESSAGE, UPDATE_DATA, UPDATE_MESSAGE, UPDATE_SOCKET_MESSAGES} from "./type";

export const updateRoomData = (payload) => ({
    type: UPDATE_DATA,
    payload
})

export const updateSocketMessages = (payload) => ({
    type: UPDATE_SOCKET_MESSAGES,
    payload
})

export const deleteSocketMessage = (payload) => ({
    type: DELETE_MESSAGE,
    payload
})

export const updateSocketMessage = (payload) => ({
    type: UPDATE_MESSAGE,
    payload
})