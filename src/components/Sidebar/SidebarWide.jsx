import React, { useState, useEffect } from 'react'
import classes from './SidebarWide.module.css'
import { searchChannels } from '../../api/twitch'
import SidebarList from './SidebarList'
import SidebarSearch from './SidebarSearch'
import SidebarIcon from './SidebarIcon'
import axios from 'axios'

function SidebarWide(props) {
    const [searchTesto, setSearchTesto] = useState("")
    const [searchDati, setSearchDati] = useState([])

    useEffect(() => {
        let cancToken = {
            cancel: ""
        }
        searchTesto !== "" ?
            searchChannels(searchTesto, cancToken)
                .then(res => {
                    setSearchDati(
                        res.map(el => ({
                            id: el.id,
                            user_name: el.broadcaster_login,
                            profile_image_url: el.thumbnail_url,
                            game_name: el.game_name
                        }))
                    )
                })
                .catch(e => {
                    if (axios.isCancel(e)) return
                })
            :
            setSearchDati([])

        if (searchTesto !== "") return () => cancToken.cancel()
    }, [searchTesto])

    return (
        <div className={classes.container} style={{ "height": props.height - 52 }}>
            {searchDati.length === 0 ?
                <div className={classes.listWrapper}>
                    <div className={classes.title}>
                        <p>FOLLOWED CHANNELS</p>
                        <div>
                            <button onClick={props.onClick}><i className="fas fa-arrow-left"></i></button>
                        </div>
                    </div>
                    <SidebarList dati={props.dati} />
                    <div className={classes.title}>
                        <p>RECOMMENDED CHANNELS</p>
                    </div>
                    <SidebarList dati={props.recommended} />
                </div>
                :
                <div className={classes.listWrapper}>
                    <p className={classes.searchTitle} >RESULTS</p>
                    <div>
                        {searchDati.slice(0, 20).map(el => {
                            return <div key={el.id} className={classes.searchElement} >
                                <SidebarIcon img={el.profile_image_url} />
                                <p>{el.user_name}</p>
                                <div className={classes.addFriend} ><i className="fas fa-user-plus"></i></div>
                            </div>
                        })}
                    </div>
                </div>
            }
            <SidebarSearch testo={searchTesto} placeholder="Search to Add Friends" handleSearch={setSearchTesto} />
        </div>
    )
}

export default SidebarWide