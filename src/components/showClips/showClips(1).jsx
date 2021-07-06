import React, { useState, useEffect } from 'react'
import classes from './showClips.module.css'
import { getCategories, getClips } from '../../api/twitch'



const Clips = (props) => {
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
        let cat_id = []
            getCategories(8).then(res=>res.map((elem)=>{
                cat_id.push(elem.id)
            })).then(()=> cat_id.map((elem)=>{
                getClips(elem).then(res=>setClipls(res.slice(0,8)))
            }))
    }, [])

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
                                    <iframe className={classes.frame}
                                        src={`https://player.twitch.tv/?video=v${elem.id}&parent=localhost&autoplay=false`}
                                        allowFullScreen={true}>
                                    </iframe>
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
                                    <iframe className={classes.frame}
                                        src={`https://player.twitch.tv/?video=v${elem.id}&parent=localhost&autoplay=false`}
                                        allowfullscreen="true">
                                    </iframe>
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
            <button className={classes.more} onClick={changeIt}>Show more  v</button>
        </div>
    )
}

export default Clips;

/* if (!more) {
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
                    } */
