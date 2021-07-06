import React, { useState } from 'react'
import classes from './SidebarList.module.css'
import SidebarElement from './SidebarElement'
import { Link } from 'react-router-dom'

function SidebarList({ dati }) {
    const [visible, setVisible] = useState(3)

    const showMore = () => setVisible(prevValue => prevValue + 3)
    const showLess = () => setVisible(prevValue => prevValue - 3)

    return (
        <>
            {
                dati.slice(0, visible).map(el => {
                    return (
                        <Link to={`/livestream/${el.user_id}`} className={classes.linkStream}>
                            <SidebarElement key={el.user_id} img={el.profile_image_url} name={el.user_name} game={el.game_name} viewer={el.viewer_count} />
                        </Link>
                    )
                })
            }
            <div className={classes.show}>
                {visible < dati.length ? <span onClick={showMore} >Show More</span> : <span></span>}
                {visible > 3 ? <span onClick={showLess}>Show Less</span> : <span></span>}
            </div>
        </>
    )
}

export default SidebarList