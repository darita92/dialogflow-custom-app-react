export const TYPES = {
    UPDATE_AVATAR: 'UPDATE_AVATAR',
    ADD_MESSAGE: 'ADD_MESSAGE'
}

export const actions = {
    updateAvatar: (url) => ({
        type: TYPES.UPDATE_AVATAR,
        url
    }),
    addMessage: (message) => ({
        type: TYPES.ADD_MESSAGE,
        message
    })
}