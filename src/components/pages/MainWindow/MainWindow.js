import classes from './MainWindow.module.scss'
import CategoryCard from "./CategoryCard/CategoryCard"
import {useEffect} from "react"
import {connect} from 'react-redux'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import SwiperCore, {Keyboard, Scrollbar, Navigation, Pagination} from 'swiper/core'

SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

const MainWindow = (props) => {



    useEffect(() => {
        props.onAddContent()
    }, [])

    return (
        <div className={classes.MainWindow} id='main-window'>
            <Swiper
                slidesPerView={3}
                slidesPerGroupSkip={0}
                slidesPerGroup={3}
                navigation
                // pagination={{clickable: true}}
                keyboard={{"enabled": true}}
            >
                {props.store.content
                    ? props.store.arrForMap.map((elem, index) => {

                        return (
                            <SwiperSlide key={index}>
                                <div className={classes.Column}>
                                    {props.store.content.odd.length - 1 > index
                                        ? <CategoryCard
                                            name={props.store.content.odd[index].rusCategory}
                                            englishName={props.store.content.odd[index].engCategory}
                                            clickCard={props.clickCard}
                                        />
                                        : null
                                    }

                                    {props.store.content.even.length - 1 > index
                                        ? <CategoryCard
                                            name={props.store.content.even[index].rusCategory}
                                            englishName={props.store.content.even[index].engCategory}
                                            clickCard={props.clickCard}
                                        />
                                        : null
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                    : null
                }
            </Swiper>
        </div>
    )
}

export default connect(
    state => {
        return {
            store: state.mainWindowReducer
        }
    },
    dispatch => ({
        onAddContent: (store) => {
            dispatch({type: 'GET_CONTENT', payload: store})
        }
    })
)(MainWindow)