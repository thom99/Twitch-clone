import React, {useEffect, useState} from 'react'
import { getVideos } from '../../api/twitch';
import {Link} from 'react-router-dom'
import classes from './LiveChannels.module.css';

function LiveChannels() {
    const [video, setVideo] = useState([]);
    const [more,setMore] = useState(false)

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
        getVideos('8').then((resp)=>setVideo(resp))
    }, [])

    return (
        <div className={classes.container}>
           <div><h1 className={classes.title}>Channels we think you'll like</h1></div> 
            <div className={classes.show}>
                {
                video.map((elem, index) => {
                    if(!more){
                    if(index<4){
                    return (
                        <div key={index} className={classes.card}>
                             <Link to= {`/livestream/${elem.user_id}`}>
                               <img src={elem.thumbnail_url.replace('{width}x{height}', '260x150')} alt="">
                            </img></Link>
                        </div>
                    )
                }else{
                    return
                }
            }else{
                return (
                    <div key={index} className={classes.card}>
                         <Link to= {`/livestream/${elem.user_id}`}>
                           <img src={elem.thumbnail_url.replace('{width}x{height}', '260x150')}>
                        </img></Link>
                    </div>
                )
            }
                })}                 
            </div>
            <button className={classes.more} onClick={changeIt}>Show More  v</button>
        </div>
    )

}
export default LiveChannels;

