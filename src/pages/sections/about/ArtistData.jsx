import React from "react";
import { withTranslation } from 'react-i18next';

const ArtistData = ({ t }) => {

  return (
        <article id="artistData">
            <div className="article-content">
                <h2>{t('VAR_ABOUT_HEAD')}</h2>
                <blockquote className="d-flex">

                    <article id="Elena"
                            className="artist-box d-flex flex-column justify-content-center">
                        <h4>
                            <span>Elena Gatcin</span> - 
                            voice, piano
                        </h4>
                        <div className="artist-info d-flex justify-content-between">
                            <figure className="artist-photo">
                                <img alt="Elena Gatcin" src="./../images/band/Elena.jpg" />
                            </figure>
                            <p>{t('VAR_ABOUT_ELENA')}</p>
                        </div>
                        <a  className="arrow"
                            data-title="Liviu"
                            data-action="scroll-down"
                            href="#Liviu">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </article>

                    <article id="Liviu"
                            className="artist-box d-flex flex-column justify-content-center">
                        <a  className="arrow"
                            data-title="Artists"
                            data-action="scroll-up"
                            href="#Elena">
                            <i className="fa fa-angle-up"></i>
                        </a>                                
                        <h4>
                            <span>Liviu Mărculescu</span> - 
                            trombone, bassflugelhorn, alphenhorn
                        </h4>
                        <div className="artist-info d-flex justify-content-between">
                            <figure className="artist-photo">
                                <img alt="Liviu Marculescu" src="./../images/band/Liviu.jpg" />
                            </figure>
                            <p>{t('VAR_ABOUT_LIVIU')}</p>
                        </div>
                        <a  className="arrow"
                            data-title="Giani"
                            data-action="scroll-down"
                            href="#Giani">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </article>

                    <article id="Giani"
                            className="artist-box d-flex flex-column justify-content-center">
                        <a  className="arrow"
                            data-title="Artists"
                            data-action="scroll-up"
                            href="#Elena">
                            <i className="fa fa-angle-up"></i>
                        </a>                                
                        <h4>
                            <span>Giani (Eugen) Amarandei</span> - 
                            double bass
                        </h4>
                        <div className="artist-info d-flex justify-content-between">
                            <figure className="artist-photo">
                                <img alt="Giani (Eugen) Amarandei" src="./../images/band/Giani.jpg" />
                            </figure>
                            <p>{t('VAR_ABOUT_GIANI')}</p>
                        </div>
                        <a  className="arrow"
                            data-title="Eugen"
                            data-action="scroll-down"
                            href="#Eugen">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </article>

                    <article id="Eugen"
                            className="artist-box d-flex flex-column justify-content-center">
                        <a  className="arrow"
                            data-title="Artists"
                            data-action="scroll-up"
                            href="#Elena">
                            <i className="fa fa-angle-up"></i>
                        </a>                                
                        <h4>
                            <span>Eugen Toboș</span> - 
                            guitar, voice
                        </h4>
                        <div className="artist-info d-flex justify-content-between">
                            <figure className="artist-photo">
                                <img alt="Eugen Tobos" src="./../images/band/Eugen.jpg" />
                            </figure>
                            <p>{t('VAR_ABOUT_EUGEN')}</p>
                        </div>
                        <a  className="arrow"
                            data-title="Constantin"
                            data-action="scroll-down"
                            href="#Constantin">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </article> 

                    <article id="Constantin"
                            className="artist-box d-flex flex-column justify-content-center">
                        <a  className="arrow"
                            data-title="Artists"
                            data-action="scroll-up"
                            href="#Elena">
                            <i className="fa fa-angle-up"></i>
                        </a>                                
                        <h4>
                            <span>Constantin Stavrat</span> - 
                            drums, percussion
                        </h4>
                        <div className="artist-info d-flex justify-content-between">
                            <figure className="artist-photo">
                                <img alt="Constantin Stavrat" src="./../images/band/Constantin.jpg" />
                            </figure>
                            <p>{t('VAR_ABOUT_CONSTANTIN')}</p>
                        </div>
                    </article>                             

                </blockquote>
                <a  data-href="prev" 
                    href="#bandData"
                    data-action="scroll" 
                    data-title="Previous" 
                    className="prev"
                    id="scrollToBand"
                >
                    <i className="fa fa-angle-left"></i> {t('VAR_ABOUT_LINK2')}
                </a>                        
            </div>
        </article>      
  );
}        

export default withTranslation()(ArtistData);