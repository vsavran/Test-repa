import React, {useEffect, useRef, useState} from 'react';
import {useApi} from '../../hooks/useApi'
import {Box, Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import userReselect from "../../Reselect/user.reselect";
import {useInput} from "../../hooks/useInput";
import {CardComponent} from '../../components/common/Card/Card'
import {ContactsList} from "../../components/ContactsList/ContactsList";
import {MessagesList} from "../../components/MessagesList/MessagesList";

const schema = {
    name: ''
}
const UserPage = () => {

    const {handleGetUserData, handleFindUsers, handleUpdateRoom, handleRemoveRoom, deleteMessage} = useApi()
    const roomsData = useSelector(userReselect.getRooms)
    const uid = useSelector(userReselect.getUserId)
    const userName = useSelector(userReselect.getUserName)
    const {value, onChange, clearInput} = useInput(schema)
    const [foundUsers, setFoundUsers] = useState([])


    useEffect(() => {
        handleGetUserData()
    }, [])

    const handleClearInput = () => {
        setFoundUsers([])
        clearInput()
    }

    const handleFindAndUpdateUsers = async () => {
        if (value.name) {
            const res = await handleFindUsers(value)
            return setFoundUsers(res)
        }
        setFoundUsers([])
    }
    const renderUsers = foundUsers.length ? foundUsers : roomsData

    return (
        <Container>
            <Box display={'flex'} mt={5}>
                <Box content={'div'} width={'30%'} mr={3}>
                    <CardComponent content={<ContactsList
                        handleClearInput={handleClearInput}
                        handleFindAndUpdateUsers={handleFindAndUpdateUsers}
                        value={value}
                        uid={uid}
                        userName={userName}
                        onChange={onChange}
                        handleRemoveRoom={handleRemoveRoom}
                        handleUpdateRoom={handleUpdateRoom}
                        renderUsers={renderUsers}/>}/>
                </Box>
                <Box content={'div'} width={'70%'}>
                    <CardComponent
                        content={<MessagesList userId={uid}
                                               deleteMessage={deleteMessage}/>}/>
                </Box>
            </Box>

        </Container>
    );
};

export default UserPage;
