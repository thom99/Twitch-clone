import React, { useEffect, useState } from 'react'
import classes from '../following/videos.module.css'
import { getVideos } from '../../api/twitch';
import useColor from '../../hooks/useColor';

const Videos = () => {
    const [channel, setChannel] = useState([]);
    const color = useColor()

    useEffect(() => {
        getVideos('32').then((resp) => setChannel(resp))
    }, [])

    return (
        <div>
            <button className={classes.span}><span>Latest videos</span></button>
            <div className={classes.show}>
                {
                    channel.map((elem, index) => {
                        return (
                            <div key={index} className={classes.card}>
                                    <img className={classes.img} src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt="">
                                    </img>
                                    <div className={classes.backImg}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
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

export default Videos;