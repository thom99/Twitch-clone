import React, { useState, useEffect } from 'react'
import classes from './showClips.module.css'
import { getClips } from '../../api/twitch'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Clips = () => {
    const [clips, setClipls] = useState([]);
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
    useEffect(() => {
        getClips("160489367", "8").then(res =>  setClipls(res))
    })

    // useEffect(()=>{
    //         axios.get('https://api.twitch.tv/kraken/clips/top?limit=8',{
    //             headers : {
    //                 "Client-ID": 'nyo5pswxpqg5vuok232i6mluzmg4x7', //cambia
    //                 'Accept': 'application/vnd.twitchtv.v5+json'
    //             }
    //         })
    //         .then(res=> setClipls(res.data.clips))
    // })

    // useEffect(() => {
    //     axios.get('https://api.twitch.tv/kraken/clips/followed?&limit=8', {
    //         headers: {
    //             "Client-ID": 'nyo5pswxpqg5vuok232i6mluzmg4x7', //cambia
    //             'Accept': 'application/vnd.twitchtv.v5+json',
    //             "Authorization": "OAuth" + sessionStorage.getItem('token')
    //         }
    //     })
    //         .then(res => console.log(res))
    // })
    return (
        <div className={classes.container}>
            <div><h1 className={classes.title}>Best Clips</h1></div>
            <div className={classes.show}>
                {clips.map((elem, index) => {
                    if (!more) {
                        if (index < 4) {
                            return (
                                <div key={index} className={classes.card}>
                                    <img src={elem.thumbnail_url}></img>
                                    <h3>{elem.name}</h3>
                                </div>
                            )
                        } else {
                            return
                        }
                    } else {
                        return (
                            <div key={index} className={classes.card}>
                                <img src={elem.thumbnail_url}></img>
                                <h3>{elem.name}</h3>
                            </div>
                        )
                    }
                })

                }
            </div>
            <button className={classes.more} onClick={changeIt}>Show more  v</button>
        </div>
    )
}

export default Clips;

