import React from 'react'
import Overview from './overview';
import classes from '../following/following.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Live from "./live"
import Videos from './videos'
import Hosts from './hosts'
import Categories from './categories';
import Channels from './channels';
const Following = () => {

    return (
        <div className={classes.router_container}>
        <Router>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 className={classes.h1}>Following</h1>
                    <div className={classes.container_button}>
                        <Link to="/following"><button className={classes.button} autoFocus>Overview</button></Link>
                        <Link to="/following/live"><button className={classes.button}>Live</button></Link>
                        <Link to="/following/videos"><button className={classes.button}>Videos</button></Link>
                        <Link to="/following/hosts"><button className={classes.button}>Hosts</button></Link>
                        <Link to="/following/categories"><button className={classes.button}>Categories</button></Link>
                        <Link to="/following/channels"><button className={classes.button}>Channels</button></Link>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/following" component={Overview}></Route>
                <Route path="/following/live" component={Live}></Route>
                <Route path="/following/videos" component={Videos}></Route>
                <Route path="/following/hosts" component={Hosts}></Route>
                <Route path="/following/categories" component={Categories}></Route>
                <Route path="/following/channels" component={Channels}></Route>
            </Switch>
        </Router>
        </div>
    )
}

export default Following;