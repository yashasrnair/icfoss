import React from "react";
import "./Events.css";
import { Gallery } from "react-grid-gallery";

const images = [
{
    src: "/images/event1.jpg",
    width: 320,
    height: 320,
    customOverlay: (
    <div className="custom-overlay__caption">
      <div>Introduction To Linux OS</div>
    </div>
  ),
},
{
    src: "/images/event2.jpg",
    width: 320,
    height: 320,
    customOverlay: (
    <div className="custom-overlay__caption">
      <div>Introduction To LaTeX </div>
    </div>
  ),
},
];



function Events(){
    return (
        <div className="events">
            <h1>Check out these EVENTS!</h1>
            <div className="events_container">
                <div className="gallery">
                    <Gallery images={images} enableImageSelection={false}  />
                </div>
            </div>
        </div>
    );
}


export default Events
