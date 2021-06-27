import React from "react"
import classes from "./Card.module.scss"

const Card = (props) => {
    return(
        <div className={`${classes.Card} card_id`} id='card'>
            <div className={classes.Name}>{props.content.engCategory}</div>
        </div>
    )
}

export default Card