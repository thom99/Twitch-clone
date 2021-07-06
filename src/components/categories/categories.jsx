import classes from './categories.module.css'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {getCategories} from '../../api/twitch'
import useColor from '../../hooks/useColor'
const Categories =()=>{
    const [categories,setCategories] = useState([])
    const color = useColor()
    useEffect(()=>{
            getCategories("100").then((res)=>setCategories(res))
    },[])
    return <div className={classes.container}>
               <div className={classes.title}>
                   <h1 className={classes.h1}>Browse</h1>
                   <div>
                   <button className={classes.button}>Games</button>
                   <button className={classes.button}>IRL</button>
                   <button className={classes.button}>Music</button>
                   <button className={classes.button}>Esport</button>
                   </div>
                   <button className={classes.span}><span >Categories</span></button>
                   </div>
                <div className={classes.card_container}>
                            {categories.map((elem,index)=>{
                                return <div key={index} className={classes.card}>
                                    <Link to={`/catstreams/${elem.id}`}><img className={classes.img} src={elem.box_art_url.replace("{width}x{height}","180x250")} alt=""></img></Link>
                                    <div className={classes.backImg}  style={{backgroundColor:`rgb(${color[index].red},${color[index].green},${color[index].blue})`}}></div>
                                        <div className={classes.title}></div>
                                    <h5 className={classes.h5}>{elem.name}</h5>
                                    </div>
                            })}
                </div>
    </div>
}
export default Categories