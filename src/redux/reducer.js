const intialState = {
    user:{},
    friends: []
}

const SET_USER = 'SET_USER';
const SET_FRIENDS = 'SET_FRIENDS'

export function setUser(userObj) {
    console.log(userObj)
    return {
        type: SET_USER,
        payload: userObj 
    }
}

export function setFriends(friendsArray){
    return {
        type: SET_FRIENDS,
        payload: friendsArray
    }
}

export default function reducer(state = intialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_USER:
            return {...state, user: payload}
        case SET_FRIENDS:
            return {...state, friends: payload}
        default:
            return state;
    }
}