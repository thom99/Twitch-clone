import React from 'react'
import classes from './SidebarSearch.module.css'

function SidebarSearch(props) {
    return (
        <div className={classes.searchBar} >
            <div>
                <div className={classes.searchIcon} >
                    <i className="fas fa-search"></i>
                </div>
                <input 
                value={props.testo}
                onChange={(e)=> props.handleSearch(e.target.value)}
                className={classes.searchInput} 
                type="text" 
                placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default SidebarSearch