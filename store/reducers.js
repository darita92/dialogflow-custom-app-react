import {
    TYPES
} from './actions'

const initialStates = {
    avatarIcon: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/glados-robot-bot-technology-machine-39d1fa8989dcd7a4-512x512.png',
    name: 'GLaDOS',
    headerColor: '#363636',
    botMsgColor: '#118fe4',
    usrMsgColor: '#e3e3e3',
    sessionId: require('uuid/v1')(),
    messages: []
}

export const settings = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_AVATAR:
            return Object.assign({}, state, {
                avatarIcon: action.url
            })
        case TYPES.ADD_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.push(action.message)
            })
        default:
            return state
    }
}