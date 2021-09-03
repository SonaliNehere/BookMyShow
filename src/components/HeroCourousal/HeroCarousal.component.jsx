import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";


// Import css files
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css"; we have imported in app.jsx



const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    //hooks always should be at top
    //using empty array because should make API call only once
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
        
    }, []);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
        
      };
    /*const images = [
        "https://mspoweruser.com/wp-content/uploads/2016/08/Micromax-Alpha-Laptop-1-1200x798.jpg",
        "https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger_wm_brw/public/field/image/2015/05/bookmyshow-lede-windows-phone.jpg?itok=NGcNiHh_",
        "https://thumbs.dreamstime.com/b/executive-young-professional-man-portrait-businessman-sitting-office-typing-laptop-working-business-71923682.jpg",
        "https://mspoweruser.com/wp-content/uploads/2016/06/windows-10-mobile-wall.jpg",
        "https://www.hdnicewallpapers.com/Walls/Big/Ferrari/Superb_Photo_of_Blue_Ferrari_Car.jpg" 

    ]; */
    return(
        <>
        <div className="lg:hidden my-4">
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-full h-44 md:h-80 py-3 px-2 ">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md "/>
                    </div>
                ))}
            </HeroSlider>
        </div>
        <div className="hidden lg:block my-10">
            <HeroSlider {...settingsLG}>
                {images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full rounded-md "/>
                    </div>
                ))}
            </HeroSlider>
        </div>
            
        </>
    );
};

export default HeroCarousal;