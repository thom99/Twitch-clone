import React, {useEffect, useState} from 'react'
import { getCategories } from '../../api/twitch';
import {Link} from 'react-router-dom'
import classes from './ShowCategories.module.css';
import useColor from '../../hooks/useColor';


function TopTen() {
    const [games, setGames] = useState([]);
    const color = useColor()

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
                        <Link to={`/catstreams/${elem.id}`}><img className={classes.image} src={elem.box_art_url.replace('{width}x{height}', '125x180')} alt="">
                        </img></Link>
                        <div className={classes.backImage} style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                        <span className={classes.categorie}>{elem.name}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )

}
export default TopTen;
