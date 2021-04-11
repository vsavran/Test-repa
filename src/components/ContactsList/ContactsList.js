import {Box, Button, InputAdornment} from "@material-ui/core";
import {Input} from "../common/Input/Input";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import {contactsListStyle} from "./style";
import {ItemIcon} from "../ItemIcon/ItemIcon";

export const ContactsList = ({
                                 handleFindAndUpdateUsers,
                                 value,
                                 onChange,
                                 renderUsers,
                                 handleClearInput,
                                 handleUpdateRoom,
                                 handleRemoveRoom,
								 uid,
                                 userName
                             }) => {
    const classes = contactsListStyle()

    return (
        <Box component="div">
            <Box display={'flex'}>
                <Input
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start" className={classes.root}>
                                <ClearIcon onClick={handleClearInput}/>
                            </InputAdornment>
                        ),
                    }}
                    id="standard-basic"
                    value={value['name']}
                    name={'name'}
                    onChange={onChange}/>
                <Box component="div" ml={2}>
                    <Button
                        onClick={handleFindAndUpdateUsers}
                        variant="contained"
                        color="secondary"
                        startIcon={<SearchIcon/>}
                    >
                        Search
                    </Button>
                </Box>
            </Box>
            <Box>
                {renderUsers?.map((user) => <ItemIcon handleRemoveRoom={handleRemoveRoom} id={user._id}
                                                      fn={handleUpdateRoom({id:user.participants?user.participants.find(id=>id._id!==uid)._id :user._id})}
                                                      key={user._id} name={user.name===userName?user.creatorName:user.name}/>)}
            </Box>
        </Box>
    )
}
