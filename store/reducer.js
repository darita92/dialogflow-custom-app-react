const reducer = (
    state = {
        avatarIcon: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/glados-robot-bot-technology-machine-39d1fa8989dcd7a4-512x512.png',
        name: 'GLaDOS',
        headerColor: '#363636',
        botMsgColor: '#118fe4',
        usrMsgColor: '#e3e3e3',
        sessionId: require('uuid/v1')(),
        messages: []
    }, 
    action
) => {
    switch (action.type) {
        case 'TICK':
            return {...state, tick: action.payload};
        case 'TACK':
            return {...state, tack: action.payload};
        case 'TOE':
            return {...state, toe: action.payload};
        default:
            return state
    }
};

export default reducer;