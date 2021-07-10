import React, {useEffect, useRef} from "react"
import classes from "./MainCard.module.scss"
import {connect} from "react-redux";
import Card from "./Card/Card";

const MainCard = (props) => {
    const mainCardRef = useRef(null)
    const rightRef = useRef(null)
    const leftRef = useRef(null)
    const cardRef = useRef(null)

    const clickPositive = () => {
        animationPositive()
        animationCard('positive')

    }

    const clickNegative = () => {
        animationNegative()
        animationCard('negative')
    }


    const openCard = () => {
        console.log(mainCardRef)
        mainCardRef.current.style = '0'
        const recurse = () => {
            if (mainCardRef.current.style.opacity < 1)
                setTimeout(() => {
                    mainCardRef.current.style.opacity = +mainCardRef.current.style.opacity + 0.05
                    recurse()
                }, 10)
        }
        recurse()
    }

    const animationCard = (offset) => {
        let recurse
        cardRef.current.style.left = `${cardRef.current.offsetLeft}px`
        if (offset === 'positive') {
            recurse = () => {
                if (cardRef.current.style.left.split('px')[0] < window.innerWidth + 500) {
                    setTimeout(() => {
                        let count = cardRef.current.style.left.split('px')[0]
                        count = +count + 10
                        cardRef.current.style.left = `${count}px`
                        recurse()
                    }, 5)
                } else {
                    if (props.store.indexCard < props.store.allCount-1) {
                        openCard()
                        nullifyStyle()
                    }
                    console.log(props.store.indexCard < props.store.allCount)
                    console.log(props.store.allCount)
                    if (props.store.indexCard < props.store.allCount-1)
                        props.getNewContentMainCard(props.storeApp.contentActiveItem)
                    else
                        props.getFinishMainCard(props.storeApp)
                    return true
                }
            }
        } else if (offset === 'negative') {
            recurse = () => {
                if (cardRef.current.style.left.split('px')[0] > 0 - 500) {
                    setTimeout(() => {
                        let count = cardRef.current.style.left.split('px')[0]
                        count = +count - 10
                        cardRef.current.style.left = `${count}px`
                        recurse()
                    }, 5)
                } else {
                    if (props.store.indexCard < props.store.allCount-1) {
                        openCard()
                        nullifyStyle()
                    }
                    console.log(props.store.indexCard < props.store.allCount)
                    console.log(props.store.allCount)
                    if (props.store.indexCard < props.store.allCount-1)
                        props.getNewContentMainCard(props.storeApp.contentActiveItem)
                    else
                        props.getFinishMainCard(props.storeApp)
                    return true
                }
            }
        }
        recurse()
    }

    const animationPositive = () => {
        rightRef.current.style.width = `${rightRef.current.offsetLeft}px`
        const recurse = () => {
            if (rightRef.current.style.width.split('px')[0] < window.innerWidth) {
                setTimeout(() => {
                    let countRight = rightRef.current.style.width.split('px')[0]
                    let countLeft = leftRef.current.style.width.split('px')[0]
                    countRight = +countRight + 10
                    countLeft = +countLeft - 10
                    rightRef.current.style.width = `${countRight}px`
                    leftRef.current.style.width = `${countLeft}px`
                    return recurse()
                }, 5)
            }
        }
        recurse()
    }

    const animationNegative = () => {

        rightRef.current.style.width = `${rightRef.current.offsetLeft}px`
        leftRef.current.style.width = rightRef.current.style.width
        const recurse = () => {
            if (leftRef.current.style.width.split('px')[0] < window.innerWidth) {
                setTimeout(() => {
                    let countRight = rightRef.current.style.width.split('px')[0]
                    let countLeft = leftRef.current.style.width.split('px')[0]
                    countLeft = +countLeft + 10
                    countRight = +countRight - 10
                    rightRef.current.style.width = `${countRight}px`
                    leftRef.current.style.width = `${countLeft}px`
                    return recurse()
                }, 5)
            }
        }
        recurse()
    }

    const nullifyStyle = () => {
        rightRef.current.style.width = '50%'
        leftRef.current.style.width = '50%'
        cardRef.current.style.left = '50%'
    }


    // console.log(props.store)
    useEffect(() => {
        openCard()
        props.getContentMainCard(props.storeApp.contentActiveItem)
    }, [])

    // console.log(props.store.content.content[props.store.indexCard])
    return (
        <div className={classes.MainCard} ref={mainCardRef}>
            <div className={classes.Left}
                 ref={leftRef}
                 onClick={() => clickNegative()}
            />
            <div className={classes.Right}
                 ref={rightRef}
                 onClick={() => clickPositive()}
            />
            <Card
                content={props.store.content}
                ref={cardRef}
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
        },
        getNewContentMainCard: store => {
            dispatch({type: 'GET_NEW_CONTENT_MAIN_CARD', payload: store})
        },
        getFinishMainCard: store => {
            dispatch({type: 'GET_FINISH_CONTENT_MAIN_CARD', payload: store})
        }
    })
)(MainCard)