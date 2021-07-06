import React from 'react'
import ShowCategories from '../showCategories/ShowCategories'
import LiveChannels from '../liveChannels/LiveChannels'
import BestByGame from '../bestByGame/bestByGame'
import Categories from '../categories/categories'
import Clipls from '../showClips/showClips'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Clips from '../showClips/showClips'
import classes from './ContentHome.module.css'

function ContentHome(){

return (
    
<div className={classes.window}>
<LiveChannels></LiveChannels>
<ShowCategories></ShowCategories>
<BestByGame id="509658" game="Just Chatting"></BestByGame>
<BestByGame id= "21779" game="League of Legends"></BestByGame>
<BestByGame id="29595" game="Dota2"></BestByGame>
<Clips></Clips>
</div>

)

}export default ContentHome