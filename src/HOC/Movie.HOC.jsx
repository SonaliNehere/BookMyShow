import React from "react";
import {Route} from "react-router-dom";

//layout
import MovieLayout from "../layouts/Movie.layout.jsx"; 

const MovieHOC = ({component:Component, ...rest}) => {
    //component
    //path
    //exact
    
    return(
        <>
          <Route {...rest} 
          component={(props) => (
              <MovieLayout>
                  <Component {...props}/>
              </MovieLayout>
          )}
          />
        </>
    );
}

export default MovieHOC;

