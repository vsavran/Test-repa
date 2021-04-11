class RoomReselect {
    getRoomId = (state) => state.room.selectedRoom
    getSocketMessages = (state) => state.room.socketMessages
    getParticipantId = (state) => state.room.participantId
}

export default new RoomReselect()