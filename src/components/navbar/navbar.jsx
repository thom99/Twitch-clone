import React, { useState, useEffect } from 'react'
import classes from './navbar.module.css'
import icon from './icon.png'
import heart from './heart.png'
import trophy from './trophy.png'
import music from './music.png'
import browsing from './browsing.png'
import user from './user.png'
import { Link } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'

const Navbar = () => {
    const [height, width] = useWindowSize();

    return (
        <div className={classes.navbar} id="navbar">
            {
                width > 955 ? <>
                    <div className={classes.navbar_left}>
                       <Link to="/"><button>
                            <img className={classes.logo} src={icon} alt=""></img>
                        </button></Link> 
                        <button>Following</button>
                        <Link to="/categories"><button>Browse</button></Link>
                        <div className={classes.vertical_line}></div>
                        <button>Esports</button>
                        <button>Music</button>
                        <div className={classes.icon_dot}>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className={classes.navbar_center}>
                        <input type="text" placeholder="Search" />
                        <div className={classes.icon_search}>
                            <button className={classes.button_search}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className={classes.navbar_right}>
                        <button>
                            <i className="fas fa-crown"></i>
                        </button>
                        <button>
                            <i className="fas fa-inbox"></i>
                        </button>
                        <button>
                            <i className="far fa-comment-alt"></i>
                        </button>
                        <button className={classes.button_gem}>
                            <i className="far fa-gem"></i>Get Bits
                        </button>
                        <button>
                            <img src={user} height="20px" width="20px" alt=""/>
                        </button>
                    </div>
                </>
                    :
                    <>
                        {/* <div className={classes.navbar2}> */}
                        <div className={classes.navbar_left2}>
                            <button>
                                <img className={classes.logo} src={icon}></img>
                            </button>
                            <button><img src={heart} alt="" /></button>
                            <button><img src={browsing} alt=""/></button>
                            <div className={classes.vertical_line}></div>
                            <button><img src={trophy} alt=""/></button>
                            <button><img src={music} alt=""/></button>
                            <div className={classes.icon_dot}>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className={classes.navbar_center2}>
                            <div className={classes.icon_search2}>
                                <button className={classes.button_search2}>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className={classes.navbar_right2}>
                            <div style={{ margin: "0px" }}>
                                <i class="fas fa-crown"></i>
                                <i className="fas fa-inbox"></i>
                                <i class="far fa-comment-alt"></i>
                                <img className={classes.user_image2} src={user} height="25px" width="25px" alt=""/>
                            </div>
                        </div>
                        {/* </div> */}
                    </>
            }

        </div>
    )
}

export default Navbar;