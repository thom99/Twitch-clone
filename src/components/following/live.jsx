import React, { useEffect, useState } from 'react'
import { getLiveFollowed, getUser } from '../../api/twitch';
import classes from './live.module.css'
import useColor from '../../hooks/useColor';

const Live = () =>{
    const [dati, setDati] = useState([]);
    const color = useColor()
    useEffect(() => {
        let userId
        getUser()
            .then(res => {
                userId = res[0].id

                return getLiveFollowed(userId)
            })
            .then(res => setDati(res))
    }, [])


    return (
       <div>
           <button className={classes.span}><span >Live channels</span></button>
            <div className={classes.show}>
                {
                    dati.map((elem, index) => {
                        return (
                            <div key={index} className={classes.card}>
                                    <img className={classes.img} src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt=""></img>
                                    <div className={classes.backImage}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
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

export default Live;