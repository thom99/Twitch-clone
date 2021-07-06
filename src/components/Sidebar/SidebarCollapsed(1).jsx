import React from 'react'
import classes from './SidebarCollapsed.module.css'
import SidebarIcon from './SidebarIcon'
import { Link } from 'react-router-dom'

function SidebarCollapsed(props) {
    return (
        <div className={classes.containerCollapsed} style={{ "height": props.height - 52 }} >
            <div className={classes.title}>
                <button onClick={props.onClick}><i class="fas fa-arrow-right"></i></button>
            </div>
            <SidebarIcon>
                <div className={classes.collIcon}><i class="far fa-heart"></i></div>
            </SidebarIcon>
            {props.dati.slice(0, 5).map(el => (
                <Link to={`/livestream/${el.user_id}`} className={classes.collImg}>
                    <SidebarIcon img={el.profile_image_url} />
                </Link>
            ))}
            <SidebarIcon>
                <div className={classes.collIcon}><i class="fas fa-video"></i></div>
            </SidebarIcon>
            {props.recommended.slice(0, 5).map(el => (
                <Link to={`/livestream/${el.user_id}`} href="" className={classes.collImg}>
                    <SidebarIcon img={el.profile_image_url} />
                </Link>
            ))}
        </div>
    )
}

export default SidebarCollapsed