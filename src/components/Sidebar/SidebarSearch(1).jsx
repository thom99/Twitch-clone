import React from 'react'
import classes from './SidebarSearch.module.css'

function SidebarSearch(props) {
    return (
        <div className={classes.searchBar} >
            <div>
                <div className={classes.searchIcon} >
                    <i class="fas fa-search"></i>
                </div>
                <input className={classes.searchInput} type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default SidebarSearch