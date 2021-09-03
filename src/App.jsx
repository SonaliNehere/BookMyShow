import {Route} from "react-router-dom";
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;




/*function Name(){
  return (<h1>Hello Root</h1>);
}

function Name2(){
  return (<h1>Hello Movie</h1>);
} */


function App(){
  return(
    <>
    {/*
    <Route path="/" exact component={Name} />
    <Route path="/movie" exact component={Name2} /> 
    we are using exact so that above route will not combine
      <></> - react fragment - its a rule
        */ }

    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />
    <DefaultHOC path="/plays" exact component={Plays} />
    {/* call Temp from temp.jsx */}
      
    </> 
  
  );
}

/*
function App() {
   return(
    <div className="APP p-10 ">
    <h1 className="text-6xl">Hello, Welcome to telwind</h1>
     <h1 className="text-8xl hover:text-blue-500">Hello, Welcome to telwind</h1>

     <button className="border-2 px-2 py-1 border-blue-500 rounded-md bg-blue-500 text-white 
     hover:bg-transparent hover:border-2 hover:text-blue-500 outline-none
     focus:outline-none focus:ring focus:border-blue-300">
       Hello Tailwind
  </button> 
  <button className="border-2 px-2 py-1 border-blue-500 md:border-red-500 
  lg:border-green-500 rounded bg-blue-500 md:bg-red-500 lg:bg-green-500 text-white 
  hover:bg-transparent hover:border-2 hover:text-blue-500 md:hover:text-red-500
  lg:hover:text-green-500 outline-none focus:outline-none focus:ring focus:border-blue-300 
  md:focus:border-red-300 lg:focus:border-green-300">
       Hello Tailwind
  </button>
  <div class="bg-teal-500 md:bg-red-500 lg:bg-teal-500">
  ABC
  </div>
  <h1 className="text-pavan-500">Hello Pavan</h1>
    </div>
  ) ; 
} */

export default App;

