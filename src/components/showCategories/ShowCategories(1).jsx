import React, {useEffect, useState} from 'react'
import { getCategories } from '../../api/twitch';
import {Link} from 'react-router-dom'
import classes from './ShowCategories.module.css';
import Categories from '../categories/categories';


function TopTen() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getCategories('8').then((resp)=>setGames(resp))
    }, [])

    return (
        <div className={classes.container}>
            <div><h3 className={classes.title}><Link className={classes.link} to="/categories">Categories</Link> we think you'll like</h3></div>
            <div className={classes.show}>
                {games.map((elem, index) => {
                return (
                    <div key={index} className={classes.card}>
                        <img src={elem.box_art_url.replace('{width}x{height}', '125x180')} alt="">
                        </img>
                        <span className={classes.categorie}>{elem.name}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )

}
export default TopTen;
