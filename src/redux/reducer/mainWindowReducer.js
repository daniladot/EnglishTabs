import {content} from "../../api/api"

const initState = {
    content:{
        even:[],
        odd:[]
    },
    arrForMap: []
}

export default function mainWindowReducer(state = initState, action) {
    switch (action.type) {
        case "GET_CONTENT" :
            content.forEach((elem, index) => {
                if (content.length % 2 === 1 && index === 0) {
                    state.arrForMap.push('')
                } else if (index % 2 === 0) {
                    state.arrForMap.push('')
                }
            })

            content.forEach((elem, index) => {
                if(index % 2 === 1){
                    state.content.odd.push(elem)
                }else{
                    state.content.even.push(elem)
                }
            })
            return {...state}
        default:
            return state
    }
}