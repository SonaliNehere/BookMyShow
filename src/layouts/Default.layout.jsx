import React from "react";


//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCourousal/HeroCarousal.component";




const DefaultLayout = (props) => {
    return(
        <>
            {/*<h1 className="text-xl">Default Layout</h1>*/}
            <Navbar/>
            <HeroCarousal/>

            {props.children}
        </>
    );
}

export default DefaultLayout;