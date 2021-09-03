import React from 'react';


//components
import Poster from '../components/poster/poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';


const Plays = () => {
    return (
        <>
           <div className="px-4 bg-gray-100 "> 
           {/* it can be  container */}
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold my-2 mx-8 mb-4">Plays in Mumbai</h2>
                
                        <div className="flex flex-wrap mx-8">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                                title="Digital Theatre Fest By 
                                EnActe, Rage & Bookmyshow"
                                subtitle="English/Hindi ->  ₹400"
                            />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                            title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                            subtitle="English/Hindi ->  ₹400"
                            />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                            title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                            subtitle="English/Hindi ->  ₹400"
                            />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                            title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                            subtitle="English/Hindi ->  ₹400"
                            />
                            </div>
                        
                        </div>
                    </div>
                    <div className="lg:w-3/12 "> 
                        <h2 className="text-2xl font-bold my-2 mx-2 mb-4">Filters</h2>
                        <div>
                            <div className="bg-white p-3 my-2">
                            <PlaysFilter  title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                            </div>
                            <div className="bg-white p-3 my-2">
                            <PlaysFilter title="Language" tags={["Tamil", "English", "Hindi", "Gujrati"]}/>
                            </div>
                            <div className="bg-white p-3 my-2">
                            <PlaysFilter title="Caterogies" tags={["Theatre", "Online Streaming Plays"]}/>
                            </div>
                            <div className="bg-white p-3 my-2">
                            <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Historical","Online Streaming Plays",  "Adaptation", ]}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Plays;
