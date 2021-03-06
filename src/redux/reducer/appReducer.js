import {content} from "../../api/api"

const initState = {
    checkClick: false,
    content: {},
    contentActiveItem: {},
    activeTab: ''
}

export default function appReducer(state = initState, action){
    switch (action.type){
        case 'GET_CONTENT':
            state.content = content
            return {...state}
        case 'CLICK_CARD':
            state.checkClick = action.payload.checkClick
            state.activeTab = action.payload.activeTab
            state.contentActiveItem = action.payload.contentActiveItem
            return {...state}
        case 'GET_FINISH_CONTENT_MAIN_CARD':
            console.log(action)
            state.checkClick = false
            state.content = content
            state.contentActiveItem = {}
            state.activeTab = ''
            return {...state}
        default:
            return state
    }
}