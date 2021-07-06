import React from 'react'
import classes from './SidebarWide.module.css'
import SidebarList from './SidebarList'
import SidebarSearch from './SidebarSearch'

function SidebarWide(props) {
    return (
        <div className={classes.container} style={{ "height": props.height - 52 }}>
                    <div className={classes.listWrapper}>
                        <div className={classes.title}>
                            <p>FOLLOWED CHANNELS</p>
                            <div>
                                <button onClick={props.onClick}><i class="fas fa-arrow-left"></i></button>
                            </div>
                        </div>
                        <SidebarList dati={props.dati} />
                        <div className={classes.title}>
                            <p>RECOMMENDED CHANNELS</p>
                        </div>
                        <SidebarList dati={props.recommended} />
                    </div>
                    <SidebarSearch placeholder="Search to Add Friends" />
                </div>
    )
}

export default SidebarWide