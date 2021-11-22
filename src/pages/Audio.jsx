import React from "react";
import { Helmet } from "react-helmet";
import * as Section from './sections/audio'

export default function Audio() {
    
    const meta = {
        title: "Balkanamera JazzQ",
        description: "Balkanamera JazzQ Official Website"
    }
    
  return (
      <>
        <main className="row" id="audio">
            <Helmet>
                <html lang="en" />
                <title>{meta.title}</title>
                <meta property="og:description" name="description" content={meta.description} />            
                <link rel="stylesheet" href="./../style/audio.css" />
            </Helmet>

            <Section.Carousel />
            <Section.AudioAlbums />

        </main>
      </>
  );
}
