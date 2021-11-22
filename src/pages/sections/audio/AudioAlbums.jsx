import React, { useState, useEffect } from "react";
import { SongListing } from "./";

export default function AudioAlbums() {

  return (
      <> 
        <section className="mid-square container-fluid"> 
            <article className="row justify-content-start" id="allAlbums">
                <h2 className="col-12">Balkanamera JazzQ</h2>
                <section className="container-fluid">
                    <div className="row">
                        <figure className="col-6 col-sm-4">
                            <a href="#SatchmoRevival" 
                                rel="tag" 
                                data-toggle="tooltip"
                                data-placement="top"
                                data-title="Click Cover to Listen to Satchmo Revival"
                                data-action="scroll-down">
                                <img className="w-100" src="./../images/covers/satchmo_revival.jpg" />
                            </a>
                        </figure>
                        <figure className="col-6 col-sm-4">
                            <a href="#MioriticStuff" 
                                rel="tag"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-title="Click Cover to Listen to Mioritic Stuff"
                                data-action="scroll-down">
                                <img className="w-100" src="./../images/covers/mioritic_stuff.jpg" />
                            </a>
                        </figure>
                    </div>
                </section>
          </article>
          <article className="row flex-row flex-md-column justify-content-start pt-5" id="SatchmoRevival">
                <a  className="arrow"
                    data-title="allAlbums"
                    data-action="scroll-up"
                    href="#allAlbums">
                    <i className="fa fa-angle-up"></i>
                </a> 
                <h2 className="col-7 col-md-3">Satchmo Revival</h2>
                <figure className="col-5 col-md-3"><img className="w-100" src="./../images/covers/satchmo_revival.jpg" /></figure>
                <SongListing 
                    urls={[
                        "./../music/Satchmo Revival/I Can't Give You Anything but Love.mp3",
                        "./../music/Satchmo Revival/Cheek to Cheek.mp3",
                        "./../music/Satchmo Revival/What a Difference Does it Make.mp3",
                        "./../music/Satchmo Revival/Sandu.mp3",
                        "./../music/Satchmo Revival/In a Sentimental Mood.mp3",
                        "./../music/Satchmo Revival/When You're Smiling.mp3",
                        "./../music/Satchmo Revival/Mary's Blues.mp3",
                        "./../music/Satchmo Revival/You'd Better.mp3",
                        "./../music/Satchmo Revival/What a Wonderful World.mp3",
                        "./../music/Satchmo Revival/Day In, Day Out.mp3",
                    ]}
                /> 
          </article>
          <article className="row flex-row flex-md-column justify-content-start pt-5" id="MioriticStuff">
                <a  className="arrow"
                    data-title="allAlbums"
                    data-action="scroll-up"
                    href="#allAlbums">
                    <i className="fa fa-angle-up"></i>
                </a>                
                <h2 className="col-7 col-md-3">Mioritic Stuff</h2>
                <figure className="col-5 col-md-3"><img className="w-100" src="./../images/covers/mioritic_stuff.jpg" /></figure>
                <SongListing 
                    urls={[
                        "./../music/Mioritic Stuff/01.mp3",
                        "./../music/Mioritic Stuff/02.mp3",
                        "./../music/Mioritic Stuff/03.mp3",
                        "./../music/Mioritic Stuff/04.mp3",
                        "./../music/Mioritic Stuff/05.mp3",
                        "./../music/Mioritic Stuff/06.mp3",
                        "./../music/Mioritic Stuff/07.mp3",
                        "./../music/Mioritic Stuff/08.mp3",
                    ]}
                />   
          </article>
        </section>
      </>
  );
}            