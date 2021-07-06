import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api/twitch';
import classes from '../following/categories.module.css'
import useColor from '../../hooks/useColor';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const color = useColor()

    useEffect(() => {
        getCategories("6").then((res) => setCategories(res))
    }, [])

    return (
        <div className={classes.categories}>
            <button className={classes.span}><span>Live categories</span></button>
            <div className={classes.show2}>
                <div className={classes.card_container}>
                    {categories.map((elem, index) => {
                        return <div key={index} className={classes.card2}>
                           <img className={classes.img} src={elem.box_art_url.replace("{width}x{height}", "180x250")} alt=""></img>
                           <div className={classes.backImg}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                            <div className={classes.title}></div>
                            <h5 className={classes.h5}>{elem.name}</h5>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories;