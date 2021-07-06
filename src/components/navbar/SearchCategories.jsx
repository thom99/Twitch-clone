import React from 'react'
import classes from './SearchCategories.module.css'

function SearchCategories({ dati, handleClick }) {

    if(dati.length === 0) return <div></div>

    return (
        <div className={classes.searchCategories}>
            {dati.map(el => {
                return <div onMouseDown={ () => handleClick(el.id)} key={el.id} className={classes.searchElement} >
                    <div className={classes.imgBox}>
                        <img src={el.box_art_url} alt="" />
                    </div>
                    <div className={classes.searchTitle} >
                        <p>{el.name}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default SearchCategories