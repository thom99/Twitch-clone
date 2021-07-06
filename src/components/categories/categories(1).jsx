import classes from './categories.module.css'
import { getDefaultNormalizer } from '@testing-library/dom'
import React, { useEffect, useState } from 'react'
import {getCategories} from '../../api/twitch'
const Categories =()=>{
    const [categories,setCategories] = useState([])
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
                                    <img src={elem.box_art_url.replace("{width}x{height}","180x250")} alt=""></img>
                                    <h5>{elem.name}</h5>
                                    </div>
                            })}
                </div>
    </div>
}
export default Categories