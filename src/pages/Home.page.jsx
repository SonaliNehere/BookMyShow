import axios from "axios";
import React, {useState, useEffect } from "react";


//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//import { Premier } from "../components/Premier/Premier.component";


//config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    //hooks always should be at top
    //using empty array because should make API call only once
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
            
        };
        
        requestPopularMovies();
    }, []);
    console.log({ popularMovies });

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
            
        };
        
        requestTopRatedMovies();
    }, []);
    console.log({ topRatedMovies });

    
    //console.log({ upcomingMovies });


    return <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 my-5">The best of Entertainment</h1>
            < EntertainmentCardSlider/>
        </div>
            <div className="bg-bms-800 py-16 my-10">
            <div className="container mx-auto px-4 flex flex-col gap-3">
                <div classname="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="premier" 
                        className="w-full h-full"
                    />
                </div>
                
                <PosterSlider 
                images={popularMovies } 
                title="Premiers" 
                subtitle="Brand new releases every Friday"
                isDark
                /> 
            </div>
            </div>
        </div>

        <div className="container mx-auto px-4 my-8">
            <PosterSlider 
                images={topRatedMovies} 
                title="Online Streaming events" 
                isDark={false}
            /> 
        </div>

        <div className="container mx-auto px-4 my-8">
            <PosterSlider 
                images={upcomingMovies} 
                title="Outdoor events" 
                isDark={false}
            /> 
        </div>
    </>;
};

export default HomePage;