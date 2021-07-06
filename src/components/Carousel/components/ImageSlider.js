import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./ImageSlider.module.css";
import { getVideos } from "../../../api/twitch";

const ImageSlider = ({ slides }) => {
  const [fuckingVideos, setFuckingVideos] = useState([]);

  useEffect(() => {
    // const user = getUser()
    // .then(res => console.log(res[0].id))
    getVideos()
    .then(res => setFuckingVideos(res))
  }, [])
  

  const nextSlide = () => {
    let array = [...fuckingVideos];
    let x = array.shift();
    array.push(x);
    setFuckingVideos(array);
  };

  const prevSlide = () => {
    let array = [...fuckingVideos];
    let x = array.pop();
    array.unshift(x);
    setFuckingVideos(array);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={classes.rightArrow} onClick={nextSlide} />
      {fuckingVideos.map((video, index) => {
        let autoplay = false;
        if(index === 2){
              autoplay=true
        }else{
          autoplay=false
        }
        return (
          // <div
            // className={classes[`slide${index}`]}
            // id={slide.id}
            // key={slide.id}
          // >
          //   {(
          //     <img src={slide.image} alt="" className={classes.image} />
          //   )}
          // </div>
          <div 
          className={classes[`video${index}`]}
          id={video.id}
          key={video.id}
          >
                      <iframe 
                      src={`https://player.twitch.tv/?channel=${video.user_name}&parent=localhost&autoplay=${autoplay}`}  
                      className={classes.image}
                      width="350px"
                      height="270px"
                      >
                      </iframe>

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
