import classes from './CategoryCard.module.scss'

const CategoryCard = (props) => {

    return (
        <div className={`${classes.CategoryCard} main-window-card`}
             onClick={(e) => props.clickCard(e)}
        >
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.Name}>({props.englishName})</div>
        </div>
    )
}

export default CategoryCard