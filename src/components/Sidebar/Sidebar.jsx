import React, { useState, useEffect } from 'react'
import merge from 'lodash.merge'
import axios from 'axios'
import classes from './Sidebar.module.css'
import { getUser, getUsers, getLiveFollowed, getVideos, getUserFollows } from '../../api/twitch'
import useWindowSize from '../../hooks/useWindowSize'
import SidebarCollapsed from './SidebarCollapsed'
import SidebarWide from './SidebarWide'

function Sidebar() {

    const [dati, setDati] = useState([])
    const [recommended, setRecommended] = useState([])
    const [collapse, setCollapse] = useState(false)
    const [height, width] = useWindowSize();

    useEffect(() => {

        let userId
        let allFollowed
        let onlineFollowed
        let offlineFollowed
        let usersSidebar
        let usersImg

        getUser()
            .then(res => {
                userId = res[0].id
                return getUserFollows(userId)
            })
            .then(res => {
                allFollowed = res.map(el => (
                    {
                        user_id: el.to_id,
                        user_name: el.to_name,
                        offline: true
                    }
                ))

                return getLiveFollowed(userId)
            })
            .then(res => {
                onlineFollowed = res.map(el => (
                    {
                        user_id: el.user_id,
                        user_name: el.user_name,
                        game_name: el.game_name,
                        viewer_count: el.viewer_count
                    }
                ))

                offlineFollowed = allFollowed.filter(el => {
                    return !onlineFollowed.some(elem => elem.user_id === el.user_id)
                })

                usersSidebar = onlineFollowed.concat(offlineFollowed)

                return axios.all(
                    usersSidebar.map(el => getUsers(el.user_id)))
            })
            .then(res => {
                usersImg = res.map(el => el[0] ? { profile_image_url: el[0].profile_image_url } : {})

                setDati(merge(usersSidebar, usersImg))
            })

        let recommendedStreams
        let recommendedUsers
        getVideos('10')
            .then(res => {
                recommendedStreams = res.map(el => ({
                    user_id: el.user_id,
                    user_name: el.user_name,
                    game_name: el.game_name,
                    viewer_count: el.viewer_count
                }))

                return axios.all(
                    recommendedStreams.map(el => getUsers(el.user_id))
                )
            })
            .then(res => {
                recommendedUsers = res.map(el => ({ profile_image_url: el[0].profile_image_url }))

                setRecommended(merge(recommendedStreams, recommendedUsers))
            })
    }, [])

    useEffect(() => {
        width < 955 ? setCollapse(true) : setCollapse(false)
    }, [width])

    return (
        <div className={collapse ? classes.collapse : classes.wide}>
            {(collapse) ?
                <SidebarCollapsed dati={dati} recommended={recommended} onClick={() => setCollapse(!collapse)} height={height}/>
                :
                <SidebarWide dati={dati} recommended={recommended} onClick={() => setCollapse(!collapse)} height={height}/>
                }
        </div>
    )
}

export default Sidebar