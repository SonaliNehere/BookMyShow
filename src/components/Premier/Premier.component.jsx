import React from 'react';
import Slider from 'react-slick';



//components
import Poster from '../poster/poster.component';

//config
//can use other name while importing
import PosterCaurouselSettings from '../../config/PosterCarousel.config.js';
import PremierImages from '../../config/TempPosters.config.js';


export const Premier = () => {

    {/* const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    */}

    {/*

      const PremierImages = [
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
        {
          src: "https://tse3.mm.bing.net/th?id=OIP.vGFPXVM8kWzdjgSvrSrftQHaL3&pid=Api&P=0&w=300&h=300",
          alt: "zack",
          title: "Zalc",
          subtitle: "English",
        },
      ]; */}
    
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
};

export default Poster;



