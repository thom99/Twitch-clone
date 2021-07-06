import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../navbar/navbar'
import Sidebar from '../Sidebar/Sidebar';
import classes from './home.module.css';
import Categories from '../categories/categories'
import LiveStream from '../liveStream/LiveStream'
import ContentHome from '../contentHome/ContentHome';
const Home = ()=>{
   
    return <div>
        <Router>
                <div><Navbar ></Navbar></div>
                <div className={classes.router}>
                <div><Sidebar></Sidebar></div>
                <div className={classes.container}>
                    <Switch>
                        <Route path="/categories" component={Categories}></Route>
                        <Route path="/" exact component={ContentHome}></Route>
                        <Route path={"/categories"} component={Categories}></Route>
                        <Route path={"/livestream/:user"} component={LiveStream}></Route>
                    </Switch>
                </div>
                </div>
                </Router>
             </div>
}
export default Home