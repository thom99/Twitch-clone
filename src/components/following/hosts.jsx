import React from 'react'
import classes from '../following/hosts.module.css'

const Hosts = () => {
    return (
        <div className={classes.host}>
            <button className={classes.span}><span>Live hosts</span></button>
            <div className={classes.container}>
                <p>No Hosts Live</p>
            </div>
        </div>
    )
}

export default Hosts;