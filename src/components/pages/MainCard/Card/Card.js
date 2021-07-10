import React from "react"
import classes from "./Card.module.scss"

const Card = React.forwardRef((props,ref) => {
    return(
        <div className={`${classes.Card} card_id`} ref={ref} >
            <div className={classes.Name}>{props.content}</div>
        </div>
    )
})

export default Card