import React from "react";
import {Route} from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout.jsx"; //layout

const DefaultHOC = ({component:Component, ...rest}) => {
    //component
    //path
    //exact
    
    return(
        <>
          <Route {...rest} 
          component={(props) => (
              <DefaultLayout>
                  <Component {...props}/>
              </DefaultLayout>
          )}
          />
        </>
    );
}

export default DefaultHOC;

const pavan =  {
    name : "pawan",
};

const student = { ...pavan, goodStudent:true };