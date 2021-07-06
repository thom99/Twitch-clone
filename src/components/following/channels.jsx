import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUser, getUsers, getUserFollows } from '../../api/twitch';
import classes from './channels.module.css'


const Channels = () => {
    const [follow, setFollow] = useState([])

    useEffect(() => {
        getUser()
            .then(res => getUserFollows(res[0].id))
            .then(res => axios.all(res.map(el => getUsers(el.to_id))
                // getUsers(res[0].to_id),
                // getUsers(res[1].to_id),
                // getUsers(res[2].to_id)
            ))
            .then(res => setFollow(res.map(el => el[0])))
    }, [])
    console.log(follow)
    // useEffect(() => {
    //     getUsers().then(res => console.log(res))
    // })
    return (
        <div className={classes.channels}>
            <button className={classes.span}><span >Followed channels</span></button>
            <div className={classes.show}>
                {
                    follow.map((elem, index) => {
                        return (
                            <div key={index} className={classes.card}>
                                    <img src={elem.profile_image_url.replace('{width}x{height}', '342x192')} alt=""></img>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Channels;