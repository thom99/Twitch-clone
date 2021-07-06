import React from 'react'
import classes from './SidebarElement.module.css'
import SidebarIcon from './SidebarIcon'

function SidebarElement(props) {
    return (
        <div className={classes.container}>
            <SidebarIcon img={props.img} offline={props.offline} />
            <div className={classes.info}>
                <p className={classes.infoTitle}>{props.name}</p>
                <p className={classes.infoGame}>{props.game}</p>
            </div>
            {
                !props.offline ?
                    <div className={classes.visual}>
                        <div className={classes.redCircle}></div>
                        <p>{props.viewer}</p>
                    </div>
                    :
                    <div className={classes.visual}>
                        <p>offline</p>
                    </div>
            }

        </div>
    )
}

export default SidebarElement