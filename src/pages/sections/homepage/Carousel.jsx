import React from "react";

export default function Carousel() {
  
    return (
        <>
            <div id="homeCarousel" className="carousel full-page-carousel carousel-fade slide container-fluid" data-ride="carousel" data-interval="4000">
                <ol className="carousel-indicators">
                    <li data-target="#homeCarousel" data-slide-to="0"></li>
                    <li data-target="#homeCarousel" data-slide-to="1"></li>
                    <li data-target="#homeCarousel" data-slide-to="2"></li>
                    <li data-target="#homeCarousel" data-slide-to="3"></li>
                    <li data-target="#homeCarousel" data-slide-to="4"></li>
                    <li data-target="#homeCarousel" data-slide-to="5"></li>
                    <li data-target="#homeCarousel" data-slide-to="6"></li>
                    <li data-target="#homeCarousel" data-slide-to="7"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active"><img src="./../images/slider/1.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/2.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/3.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/4.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/5.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/6.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/7.jpg" className="d-block" alt="..." /></div>
                    <div className="carousel-item"><img src="./../images/slider/8.jpg" className="d-block" alt="..." /></div>
                </div>
            </div>
        </>
   );
}