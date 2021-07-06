import React, { useEffect, useState } from 'react'
import ShowCategories from '../showCategories/ShowCategories'
import LiveChannels from '../liveChannels/LiveChannels'
import BestByGame from '../bestByGame/bestByGame'
import Carosello from '../Carousel/Carosello'
import Clips from '../showClips/showClips'
import classes from './ContentHome.module.css'
import { getCategories } from '../../api/twitch'


function ContentHome() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getCategories('3').then(resp => setGames(resp))
  }, [])

  return (

    <div className={classes.window}>
      <Carosello />
      <LiveChannels></LiveChannels>
      <ShowCategories></ShowCategories>
      {games.map((elem, index) => <BestByGame key={index} id={elem.id} game={elem.name}></BestByGame>)}
      {games.slice(0, 1).map((elem, index) => <Clips key={index} id={elem.id}></Clips>)}

    </div>

  )

} export default ContentHome