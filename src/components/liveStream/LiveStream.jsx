import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api/twitch';
import { useParams } from 'react-router-dom'
import classes from './livestream.module.css'
function LiveStream() {
    let { user } = useParams()
    const [image_url, setUrl] = useState("")
    useEffect(() => {
        getUsers(user).then((res) => setUrl(res[0]))
    }, [user])
    if (image_url !== "") {
        return (
            <div className={classes.box} style={{ "height": window.innerHeight - 52 }}>
                <iframe
                    src={`https://player.twitch.tv/?channel=${image_url.display_name}&parent=localhost`}
                    height="450"
                    width="785"
                    allowFullScreen="true"
                >
                </iframe>
                <div className={classes.stream} >
                    <div><img src={image_url.profile_image_url} alt="" className={classes.profile} /></div>
                    <div className={classes.stream_description}>
                        <div className={classes.title}>{image_url.display_name}</div>
                        <div className={classes.description}><p className={classes.p}>{image_url.description}</p></div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div>Diciamo che potrebbe esserci un problema</div>
    }

}
export default LiveStream;