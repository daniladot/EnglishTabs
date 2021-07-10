// import { storeGet } from "../Store";

const initState = {
    content: '',
    indexCard: 0
}

export default function mainCardReducer(state = initState, action){
    switch (action.type) {
        case 'GET_CONTENT_MAIN_CARD':
            state.content = action.payload.content[state.indexCard].eng
            state.indexCard = 0
            state.allCount = action.payload.content.length
            return {...state}
        case 'GET_NEW_CONTENT_MAIN_CARD':
            console.log(action)
            state.indexCard++
            state.content = action.payload.content[state.indexCard].eng
            state.allCount = action.payload.content.length
            return {...state}
        default:
            return state
    }
}