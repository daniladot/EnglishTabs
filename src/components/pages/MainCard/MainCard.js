import React, {useEffect} from "react"
import classes from "./MainCard.module.scss"
import {connect} from "react-redux";
import Card from "./Card/Card";

const MainCard = (props) => {

    const clickPositive = () => {
        console.log('clickPositive')
        animationPositive()
        animationCard('positive')
    }

    const clickNegative = () => {
        console.log('clickNegative')
        animationNegative()
        animationCard('negative')
    }


    const openCard = () => {
        // document.getElementById('main-card').style.opacity = 0
        const recurse = () => {
            if (document.getElementById('main-card').style.opacity < 1)
                setTimeout(() => {
                    document.getElementById('main-card').style.opacity = +document.getElementById('main-card').style.opacity + 0.05
                    recurse()
                }, 10)
        }
        recurse()
    }

    const animationCard = (offset) => {
        let recurse
        const card = document.getElementById('card')
        card.style.left = `${card.offsetLeft}px`
        if (offset === 'positive') {
            recurse = () => {
                console.log(card.style.left)
                if (card.style.left.split('px')[0] < window.innerWidth + 500) {
                    setTimeout(() => {
                        let count = card.style.left.split('px')[0]
                        console.log(count)
                        count = +count + 10
                        card.style.left = `${count}px`
                        recurse()
                    }, 5)
                }
            }
        } else {
            recurse = () => {
                console.log(card.style.left)
                if (card.style.left.split('px')[0] > 0 - 500) {
                    setTimeout(() => {
                        let count = card.style.left.split('px')[0]
                        console.log(count)
                        count = +count - 10
                        card.style.left = `${count}px`
                        recurse()
                    }, 5)
                }
            }
        }
        recurse()
    }

    const animationPositive = () => {
        const right = document.getElementById('right')
        const left = document.getElementById('left')
        right.style.width = `${right.offsetLeft}px`
        // console.log(right.offsetLeft)]
        const recurse = () => {
            if (right.style.width.split('px')[0] < window.innerWidth) {
                setTimeout(() => {

                    let countRight = right.style.width.split('px')[0]
                    let countLeft = left.style.width.split('px')[0]
                    countRight = +countRight + 10
                    countLeft = +countLeft - 10
                    right.style.width = `${countRight}px`
                    left.style.width = `${countLeft}px`
                    return recurse()
                }, 5)
            }
        }
        recurse()
    }

    const animationNegative = () => {
        const right = document.getElementById('right')
        const left = document.getElementById('left')
        right.style.width = `${right.offsetLeft}px`
        left.style.width = right.style.width
        // console.log(right.offsetLeft)]
        const recurse = () => {
            if (left.style.width.split('px')[0] < window.innerWidth) {
                setTimeout(() => {
                    let countRight = right.style.width.split('px')[0]
                    let countLeft = left.style.width.split('px')[0]
                    countLeft = +countLeft + 10
                    countRight = +countRight - 10
                    right.style.width = `${countRight}px`
                    left.style.width = `${countLeft}px`
                    return recurse()
                }, 5)
            }
        }
        recurse()
    }


    useEffect(() => {
        openCard()
        props.getContentMainCard(props.storeApp.contentActiveItem)
    }, [])

    // console.log(props)
    return (
        <div className={classes.MainCard} id='main-card'>
            <div className={classes.Left}
                 id='left'
                 onClick={() => clickNegative()}
            />
            <div className={classes.Right}
                 id='right'
                 onClick={() => clickPositive()}
            />
            <Card
                content={props.store.content}
            />
        </div>
    )
}


export default connect(
    state => {
        return {
            store: state.mainCardReducer,
            storeApp: state.appReducer
        }
    },
    dispatch => ({
        getContentMainCard: store => {
            dispatch({type: 'GET_CONTENT_MAIN_CARD', payload: store})
        }
    })
)(MainCard)