import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getStreamFromCategories, getCategoriesById } from '../../api/twitch'
import { Link } from 'react-router-dom'
import classes from './streamsCategories.module.css'
import useColor from '../../hooks/useColor';



function StreamsCategories() {
    const { category } = useParams();
    const [streams, setStreams] = useState([]);
    const [categ, setCateg] = useState([]);
    const color = useColor();

    useEffect(() => {
        getStreamFromCategories(category, 100)
            .then(resp => setStreams(resp))

        getCategoriesById(category)
            .then(resp => setCateg(resp))

    }, [category])


    return (
        <div className={classes.container}>
            {categ.map(elem => {
                return <div className={classes.title}>
                    <div className={classes.cat_img}>
                        <img src={elem.box_art_url.replace('{width}x{height}', '125x180')} alt="" />
                    </div>
                    <div className={classes.game}><h1>{elem.name}</h1></div>
                </div>
            })}
            <div className={classes.card_container}>
                {streams.map((elem, index) => {
                    return (
                        <div key={index} className={classes.card}>
                            <Link to={`/livestream/${elem.user_id}`}><img className={classes.image} src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt=""></img></Link>
                            <div className={classes.backImage} style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                            <div className={classes.stream_desc}>
                                        <div className={classes.stream_title}>{elem.title}</div>
                                        <div className={classes.stream_user}>{elem.user_name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default StreamsCategories;