const intialState = {
    user:{}
}

const SET_USER = 'SET_USER';

export function setUser(userObj) {
    console.log(userObj)
    return {
        type: SET_USER,
        payload: userObj 
    }
}

export default function reducer(state = intialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}