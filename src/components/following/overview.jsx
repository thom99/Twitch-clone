
import classes from './overview.module.css'
import React, { useEffect, useState } from 'react'
import { getVideos } from '../../api/twitch';
import { getLiveFollowed, getUser, getCategories } from '../../api/twitch';
import useColor from '../../hooks/useColor';

const Overview = () => {
    const [channel, setChannel] = useState([]);
    const [dati, setDati] = useState([]);
    const [categories, setCategories] = useState([]);
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
        let userId
        getUser()
            .then(res => {
                userId = res[0].id

                return getLiveFollowed(userId)
            })
            .then(res => setDati(res))
    }, [])

    useEffect(() => {
        getVideos('8').then((resp) => setChannel(resp))
    }, [])


    useEffect(() => {
        getCategories("6").then((res) => setCategories(res))
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
            <button className={classes.span}><span>Latest videos</span></button>
            <div className={classes.show}>
                {
                    channel.map((elem, index) => {
                        if (!more) {
                            if (index < 4) {
                                return (
                                    <div key={index} className={classes.card}>
                                            <img className={classes.img} src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt="">
                                            </img>
                                            <div className={classes.backImage}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
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
                                        <img className={classes.img} src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt="">
                                        </img>
                                        <div className={classes.backImage}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                                    <div className={classes.stream_desc}>
                                        <div className={classes.stream_title}>{elem.title}</div>
                                        <div className={classes.stream_user}>{elem.user_name}</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </div>
            <div className={classes.button_more}>
                <button className={classes.more} onClick={changeIt}>Show More  v</button>
            </div>
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

export default Overview;