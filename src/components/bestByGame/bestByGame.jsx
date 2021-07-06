import React, { useEffect, useState } from 'react'
import { getStreamFromCategories } from '../../api/twitch'
import classes from './bestByGames.module.css'
import { Link } from 'react-router-dom'
import useColor from '../../hooks/useColor'

const BestByGame = (props) => {
    const [streams, setStreams] = useState([])
    const [more, setMore] = useState(false)

    const color = useColor()

    const changeIt = (ev) => {
        if (!more) {
            ev.target.value = "Show Less  ^"

        } else {
            ev.target.value = "Show More  v"
        }
        ev.target.innerText = ev.target.value
        setMore(!more)
    }
    useEffect(() => {
        getStreamFromCategories(props.id, 8).then(res => setStreams(res))
    }, [])
    return (
        <div className={classes.container}>
            <div><h1 className={classes.title}>Recomended <Link to={`/catstreams/${props.id}`}><span className={classes.categorie}>{props.game}</span> </Link> channels</h1></div>
            <div className={classes.show}>
                {streams.map((elem, index) => {
                    if (!more) {
                        if (index < 4) {
                            return (
                                <div key={index} className={classes.card}>
                                    <Link to={`/livestream/${elem.user_id}`}><img className={classes.image} src={elem.thumbnail_url.replace('{width}x{height}', '125x180')} alt="" ></img></Link>
                                    <div className={classes.backImage} style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                                    <div className={classes.stream_desc}>
                                        <div className={classes.stream_title}>{elem.title}</div>
                                        <div className={classes.stream_user}>{elem.user_name}</div>
                            </div>
                                </div>
                            )
                        } else {
                            return
                        }
                    } else {
                        return (
                            <div key={index} className={classes.card}>
                                <Link to={`/livestream/${elem.user_id}`}><img className={classes.image} src={elem.thumbnail_url.replace('{width}x{height}', '125x180')} alt="" ></img></Link>
                                <div className={classes.backImage} style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                                <div className={classes.stream_desc}>
                                        <div className={classes.stream_title}>{elem.title}</div>
                                        <div className={classes.stream_user}>{elem.user_name}</div>
                            </div>
                            </div>
                        )
                    }
                })

                }
            </div>
            <button className={classes.more} onClick={changeIt}>Show More  v</button>
        </div>
    )
}
export default BestByGame