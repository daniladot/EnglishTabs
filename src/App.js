import './App.css'
import MainWindow from './components/pages/MainWindow/MainWindow'
import MainCard from "./components/pages/MainCard/MainCard"
import {connect} from "react-redux"
import {useEffect} from "react"

function App(props) {

    const clickCard = (event) => {
        new Promise((resolve) => {
            closeCard(resolve)
        }).then((resolve) => {
            const contentCopy = {...props.store}
            contentCopy.checkClick = !props.store.checkClick
            contentCopy.activeTab = event.target.closest('.main-window-card').childNodes[0].innerText
            contentCopy.contentActiveItem = contentCopy.content.find(elem => elem.rusCategory === contentCopy.activeTab)
            props.clickCard(contentCopy)
        })
    }

    const closeCard = (res) => {
        document.getElementById('main-window').style.opacity = 1
        const recurse = () => {
            if (document.getElementById('main-window').style.opacity > 0) {
                setTimeout(() => {
                    document.getElementById('main-window').style.opacity = +document.getElementById('main-window').style.opacity - 0.05
                    console.log(document.getElementById('main-window'))
                    recurse()
                }, 5)
            } else {
                res(1)
            }
        }
        recurse()
    }

    useEffect(() => {
        props.getContent()
    },[])

    console.log(props.store)
    return (
        <div className="App">
            {!props.store.checkClick
            ? <MainWindow
                clickCard={clickCard}
                />
            : <MainCard/>
            }
        </div>
    );
}

export default connect(
    state => {
        return {store: state.appReducer}
    },
    dispatch => ({
        getContent: (store) => {
          dispatch({type:'GET_CONTENT', payload: store})
        },
        clickCard: (store) => {
            dispatch({type:'CLICK_CARD', payload: store})
        }
    })
)(App)