import React from "react";

export default function VideoCarousel() {
  
    return (
        <>
            <section id="videoCarousel"
                class="carousel slide mid-square"
                data-mdb-ride="carousel"
                data-interval="false">
                <ol className="carousel-indicators">
                    <li data-target="#videoCarousel" data-slide-to="0" style={{ backgroundImage: `url(https://img.youtube.com/vi/SPOh1zSzkYQ/default.jpg)` }}>
                        <span class="video-title">Jocul</span>
                    </li>
                    <li data-target="#videoCarousel" data-slide-to="1" style={{ backgroundImage: `url(https://img.youtube.com/vi/jCgIU2Yb-S8/default.jpg)` }}>
                        <span class="video-title">Mioritic Stuff</span>
                    </li>
                    <li data-target="#videoCarousel" data-slide-to="2" style={{ backgroundImage: `url(https://img.youtube.com/vi/sqOvCiathhU/default.jpg)` }}>
                        <span class="video-title">Lena's Tune</span>
                    </li>
                </ol>
                <h1>Balkanamera JazzQ</h1>
                <h2>Visit our <a rel="nofollow noopener" href="https://www.youtube.com/channel/UC3WCY80tlhv1nF1alju0dqw">Youtube Channel</a>!</h2>

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <iframe src="https://www.youtube.com/embed/SPOh1zSzkYQ" 
                                title="YouTube video player" 
                                frameborder="0" 
                                autoplay 
                                allowfullscreen>
                        </iframe>
                    </div>

                    <div class="carousel-item">
                        <iframe src="https://www.youtube.com/embed/jCgIU2Yb-S8" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="carousel-item">
                        <iframe src="https://www.youtube.com/embed/sqOvCiathhU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>

                </div>
            </section>
        </>
   );
}