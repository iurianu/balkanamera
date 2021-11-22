import React from "react";
import { Helmet } from "react-helmet";
import * as Section from './sections/homepage'

function Home() {
    
    const meta = {
        title: "Balkanamera JazzQ",
        description: "Balkanamera JazzQ Official Website"
    }
    
  return (
      <>
        <main className="row" id="home">
            <Helmet>
                <html lang="ro" />
                <title>{meta.title}</title>
                <meta property="og:description" name="description" content={meta.description} />            
                <link rel="stylesheet" href="./../style/homepage.css" />
            </Helmet>

            <Section.Carousel />
            <h1>Balkanamera JazzQ</h1>
            <h2><a href="./about" rel="tag">Balkan Jazz</a></h2>

        </main>
      </>
  );
}

export default Home;