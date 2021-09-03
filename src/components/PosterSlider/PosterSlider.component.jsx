import React from 'react';
import Slider from "react-slick";

//component
import Poster from '../poster/poster.component';

//configs
//can use other name while importing
import PosterCaurouselSettings from '../../config/PosterCarousel.config.js';


export const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCaurouselSettings
    return (
        <>
        <div className="flex flex-col items-start">
          <h3
           className={` text-2xl font-bold my-3 ${
               props.isDark ? "text-white" : "text-gray-800"
            }`}
            >
                {props.title}
            </h3>
          <p 
            className={`text-sm ${
                props.isDark ? "text-white" : "text-gray-800"
            }`}
            >
                {props.subtitle}
            </p>
        </div>  
       
        <Slider { ...sliderConfig }>
          {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>  
        </>
    );
};

export default PosterSlider;
