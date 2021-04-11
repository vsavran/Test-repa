import {Box, Button} from "@material-ui/core";
import React, {useEffect, useRef, useState} from "react";
import {Input} from "../common/Input/Input";
import {useInput} from "../../hooks/useInput";
import io from "socket.io-client";
import {useSelector} from "react-redux";
import roomSelector from '../../Reselect/room.reselect'
import {useDispatchHook} from "../../hooks/useDispatch";
import {deleteSocketMessage, updateSocketMessage, updateSocketMessages} from "../../rdx/RoomModule/actions";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from '@material-ui/icons/Edit';

const schema = {
    messageValue: ''
}
export const MessagesList = ({userId}) => {
    const {value, onChange, clearInput} = useInput(schema)
    const [toggleEdited, setToggleEdited] = useState({edited: false, _id: ''})
    const room = useSelector(roomSelector.getRoomId)
    const messagesSocket = useSelector(roomSelector.getSocketMessages)
    const {updateSocketData, deleteMessage, updateMessage} = useDispatchHook({
        updateSocketData: updateSocketMessages,
        deleteMessage: deleteSocketMessage,
        updateMessage:updateSocketMessage
    })
    const socketRef = useRef()
    useEffect(
        () => {
            if (room) {
                socketRef.current = io.connect("http://localhost:5001")
                socketRef.current.emit("userConnected", {room})
                socketRef.current.on("message", (data) => {
                    updateSocketData(data)
                })
                socketRef.current.on('deleteMessage', (data) => {
                    deleteMessage(data)
                })
                socketRef.current.on('editMessage',(data)=>{
                    updateMessage(data)
                })
                return () => socketRef.current.disconnect()
            }
        },
        [room]
    )
    const onMessageSubmit = (e) => () => {
        socketRef.current.emit("message", {message: e.messageValue, room, senderId: userId})
        clearInput()
    }
    const onDeleteMessage = (_id) => () => {
        socketRef.current.emit("deleteMessage", {id: _id, roomId: room})
    }
    const handleEditMessage = (_id) => () => {
        setToggleEdited({edited: true, _id: _id})
        const message = messagesSocket.find(mess => mess._id === _id)
        onChange({target: {value: message.message, name: 'messageValue'}})
    }
    const handleSaveEditedMessage = () => {
        console.log('here')
        const {_id} = toggleEdited
        socketRef.current.emit("editMessage", {id: _id, message: value['messageValue']})
        setToggleEdited({edited: false, _id: ''})
        clearInput()
    }
    if (!room) {
        return (<Box>
            Empty
        </Box>)
    }

    return (
        <Box component="div">
            <Box component={'h3'}>Messages</Box>
            <Box component={'div'}>
                {messagesSocket?.map(({message, _id, sender}) => <Box key={_id}
                                                                      display={'flex'}
                                                                      justifyContent={userId === sender ? "flex-start" : 'flex-end'}><Box>{message}</Box>{
                    userId === sender && <Box display={'flex'} alignItems={'center'}><ClearIcon
                        onClick={onDeleteMessage(_id)}/><EditIcon onClick={handleEditMessage(_id)}
                                                                  fontSize={'small'}/></Box>}</Box>)}
            </Box>
            <Box>
                <Input name={"messageValue"} value={value['messageValue']} onChange={onChange}/>
                <Button disabled={!value['messageValue']}
                        onClick={!toggleEdited.edited ? onMessageSubmit(value) : handleSaveEditedMessage}>{!toggleEdited.edited ? 'Send' : "Edit"}</Button>
            </Box>
        </Box>
    )
}