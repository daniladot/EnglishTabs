// import { storeGet } from "../Store";

const initState = {
    content: {}
}

export default function mainCardReducer(state = initState, action){
    switch (action.type) {
        case 'GET_CONTENT_MAIN_CARD':
            state.content = action.payload
            return {...state}
        default:
            return state
    }
}