import ReactDom from "react-dom/client";
import image1 from "./assets/images/sunset.jpg";
import image2 from "./assets/images/mountain.jpg";
import image3 from "./assets/images/waterfall.jpg";
import image4 from "./assets/images/forest.jpg";
import image5 from "./assets/images/beach.jpg";
import image6 from "./assets/images/lake.jpg";
import image7 from "./assets/images/desert.jpg";
import image8 from "./assets/images/lights.jpg";
import image9 from "./assets/images/garden.jpg";
import image10 from "./assets/images/snow.jpg";
import image11 from "./assets/images/greenvalley.jpg";
import image12 from "./assets/images/island.jpg"
import "./input.css";
const root=ReactDom.createRoot(document.getElementById("root"))

function Gallerycard(props){
  return(
    <div className="bg-white rounded-xl shadow-md grid  hover:shadow-2xl hover:translate-y-1 transition duration-700 ease-in-out overflow-hidden">
      
        <img src={props.img} alt="img" className="w-full h-56 object-cover rounded-t-xl"></img>
      
      <div className="grid grid-cols-1 justify-items-center items-center gap-2 bg-orange-900 w-full p-5 rounded-b-xl pb-2">
        
        <h2 className="text-2xl font-bold text-orange-100 pl-4 mt-2">{props.brand}</h2>
        
        <p className="text-orange-100 pl-4">{props.about}</p>
       
      
      <div className="flex content-around justify-between pb-2">
        <button className="bg-orange-100 rounded-xl text-orange-950 mr-2 p-2 w-32 hover:shadow-sm hover:shadow-orange-100 hover:bg-orange-900 hover:text-orange-100 hover:translate-y-1 transition-all duration-700 ease-in-out"><a href="https://www.google.com/">View Details</a></button></div>
        
        </div>
        
    </div>
  )}
const gallery=[
  {
    img:image1,
    brand:"Sunset",
    about:"Enjoy colourful sunsets with breathtaking evening skies",
    

  },
  {
    img:image2,
    brand:"Mountains",
    about:"Discover majestic peaks and peaceful mountain landscaps",
    

  },
   {
    img:image3,
    brand:"Waterfall",
    about:"Experience the beautyof cascading waterfalls and freah air",
    

  },
   {
    img:image4,
    brand:"Forest",
    about:"Walk through lush green forests filled with natural beauty",
   

  },
   {
    img:image5,
    brand:"Beach",
    about:"Relax on golden beaches with crystal-clear blue waters",
    

  },
   {
    img:image6,
    brand:"Lake",
    about:"Admire calm lakes surrounded ny scenic hills and trees",
    

  },
   {
    img:image7,
    brand:"Desert",
    about:"Explores vastsand dunes under endless blue skies",
    

  },
   {
    img:image8,
    brand:"Northern Lights",
    about:"Witness colourful auroras dancing across the night sky",
    

  },
   {
    img:image9,
    brand:"Flower Garden",
    about:"Enjoy vibrant flowers blooming in every beaticul colour",
   

  },
  {
    img:image10,
    brand:"Snow Valley",
    about:"Experience peaceful snowy landscapes and icy mountain views",
   

  },
  {
    img:image11,
    brand:"Green Valley",
    about:"Discover rolling green hills and refreshing natural scenery",
       
  },
  {
    img:image12,
    brand:"Tropical Island",
    about:"Escape to beautiful islands with palm trees and turquoise seas",
    
  }
]
root.render(
  <div className="min-h-screen bg-orange-100">
     <h1 className="text-4xl font-bold text-center text-orange-950 pt-4 hover:text-black">Nature Gallery</h1>

     <p className="text-md text-center text-orange-900 py-4 px-4">Explore the beauty of narure through breathtaking landscapes,vibrant forests,majestic mountains,peaceful lakes, and colourful sunsets.Every image captures the wonder and serenity of the natural world</p>
  <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  {
  gallery.map(function(item,index){
    return <Gallerycard key={index} img={item.img} brand={item.brand} about={item.about} price={item.price} ratings={item.ratings}></Gallerycard>
  })
  }
  </div> 
  
  </div>
  
)
