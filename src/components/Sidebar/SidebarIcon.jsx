import React from 'react'
import classes from './SidebarIcon.module.css'

function SidebarIcon(props) {
    return (
        props.img ?
        <div>
            <div className={classes.imgOnline}>
                <img className={`${classes.img} ${props.offline ? classes.imgGray : ""}`} src={props.img} alt="" />
            </div>
        </div>
        :
        <div>
            <div className={classes.imgOnline}>
                <div className={classes.icon} >{props.children}</div>
            </div>
        </div>
    )
}

export default SidebarIcon