import React from 'react';


//component
import Poster from '../poster/poster.component';

//configs
//can use other name while importing
import PosterCaurouselSettings from '../../config/PosterCarousel.config.js';
import PremierImages from '../../config/TempPosters.config.js';

const OnlineEntertainment = props => {
    return (
        <>
        <div className="flex flex-col items-start">
          <h3 className="text-white text-xl font-bold">Premiers</h3>
          <p className="text-white text-sm">Brand new releases every Friday</p>
        </div>  
       
        <Slider {...PosterCaurouselSettings}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark />
          ))}
        </Slider>
        </>
    )
}


export default OnlineEntertainment;

//rafc
