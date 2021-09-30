import React from "react";


//components
import Poster from '../components/poster/poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';


const Plays = () => {
    return (
        <>
            {/* it can be  container
            <div className=" container px-4 mx-auto bg-gray-100 "> 
        
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold my-2 mx-8 mb-4">Plays in Mumbai</h2>
                
                        <div className="flex flex-wrap mx-8">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTRrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00305304-wdrjvgdtmy-portrait.jpg"
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
            */} 
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2>
                    <div className="flex flex-wrap ">
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
              
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Tamil", "Telegu", "English"]}
              />
            </div>
          </div>
            </div>
        </div>
        </>
    );
};

export default Plays;
