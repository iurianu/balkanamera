import React from "react";
import { Helmet } from "react-helmet";
import * as Section from './sections/video'

export default function Video() {
    
    const meta = {
        title: "Balkanamera JazzQ",
        description: "Balkanamera JazzQ Official Website"
    }
    
  return (
      <>
        <main className="row" id="video">
            <Helmet>
                <html lang="ro" />
                <title>{meta.title}</title>
                <meta property="og:description" name="description" content={meta.description} />            
                <link rel="stylesheet" href="./../style/video.css" />
            </Helmet>

            <Section.Carousel />
            <Section.VideoCarousel />

        </main>
      </>
  );
}