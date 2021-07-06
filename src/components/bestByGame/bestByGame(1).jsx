import React, { useEffect, useState } from 'react'
import {getStreamFromCategories} from '../../api/twitch'
import classes from './bestByGames.module.css'

const BestByGame = (props)=>{
            const [streams,setStreams] = useState([])
            const [more, setMore] = useState(false)

            const changeIt = (ev) => {
                if (!more) {
                    ev.target.value = "Show Less  ^"
        
                } else {
                    ev.target.value = "Show More  v"
                }
                ev.target.innerText = ev.target.value
                setMore(!more)
            }
    useEffect(()=>{
            getStreamFromCategories(props.id,8).then(res=>setStreams(res))
    },[])
    return (
        <div className={classes.container}>
            <div><h1 className={classes.title}>Recomended <span className={classes.categorie}>{props.game}</span> channels</h1></div>
            <div className={classes.show}>
                {streams.map((elem, index) => {
                    if (!more) {
                        if (index < 4) {
                            return (
                                <div key={index} className={classes.card}>
                                    <img src={elem.thumbnail_url.replace('{width}x{height}', '125x180')}></img>
                                    <h3>{elem.name}</h3>
                                </div>
                            )
                        } else {
                            return
                        }
                    } else {
                        return (
                            <div key={index} className={classes.card}>
                                <img src={elem.thumbnail_url.replace('{width}x{height}', '125x180')}></img>
                                <h3>{elem.name}</h3>
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