import userApi from '../API/UserApi'
import {useContext} from "react";
import {Context} from "../Context/ContextProviderComponent";
import {getNumberFromString} from "../Tools/getNumbers";
import {codeStatus} from "../Tools/StatusCodeHandling";
import {useDispatchHook} from "./useDispatch";
import {updateState} from "../rdx/UserModule/actions";
import {updateRoomData, updateSocketMessages} from "../rdx/RoomModule/actions";

export const useApi = () => {
    const {logIn, handleShowAlert, handleToggleLoader, token, logOut, setIsSignIn, roomId, participantId} = useContext(Context)
    const {updateData, updateRoomState, updateSocketData} = useDispatchHook({
        updateData: updateState,
        updateRoomState: updateRoomData,
    })
    const handleSingIn = (params) => async () => {
        handleToggleLoader('show')
        try {
            const res = await userApi.signIn(params)
            logIn(res.data)
            return res
        } catch (e) {
            const code = getNumberFromString(e.message)
            handleShowAlert({type: 'error', text: codeStatus[code] || "Something went wrong"})
        } finally {
            handleToggleLoader('hide')
        }

    }
    const handleSignUp = (params) => async () => {
        handleToggleLoader('show')
        try {
            await userApi.signUp(params)
            handleShowAlert({type: 'success', text: "User was successfully created"})
            setIsSignIn(true)
        } catch (e) {
            const code = getNumberFromString(e.message)
            handleShowAlert({type: 'error', text: codeStatus[code] || "Something went wrong"})
        } finally {
            handleToggleLoader('hide')
        }
    }
    const handleGetUserData = async () => {
        handleToggleLoader('show')
        try {
            const res = await userApi.getUserData(token)
            updateData(res.data.user)
        } catch (e) {
            console.error(e)
            const code = getNumberFromString(e.message)
            if (+code === 401) {
                logOut()
            }
        } finally {
            handleToggleLoader('hide')
        }
    }

    const handleFindUsers = async (params) => {
        handleToggleLoader('show')
        try {
            const res = await userApi.findUsers(params, token)
            return res.data.users
        } catch (e) {
            console.log(e)
        } finally {
            handleToggleLoader('hide')
        }
    }
    const handleUpdateRoom = (params) => async () => {
        handleToggleLoader("show")
        try {
            const res = await userApi.updateRoom(params, token)
            await handleGetUserData()
            updateRoomState({selectedRoom: res.data.room._id, socketMessages: res.data.room.messages || [], participantId:params.id})
        } catch (e) {
            console.log(e)
        } finally {
            handleToggleLoader('hide')
        }
    }
    const handleRemoveRoom = (params) => async () => {
        handleToggleLoader("show")
        try {
            const res = await userApi.deleteRoom(params, token)
            await handleGetUserData()
            console.log(res)
        } catch (e) {
            console.log(e)
        } finally {
            handleToggleLoader('hide')
        }
    }
    const deleteMessage = (params) => async () => {
        handleToggleLoader("show")
        try {
            // const res = await userApi.deleteMessage(params, token)
            // await handleUpdateRoom({id:participantId})()
        } catch (e) {
            console.log(e)
        } finally {
            handleToggleLoader('hide')
        }
    }
    return {
        handleSingIn,
        handleSignUp,
        handleGetUserData,
        handleFindUsers,
        handleUpdateRoom,
        handleRemoveRoom,
        deleteMessage
    }
}
