import React from "react";
import { withTranslation } from 'react-i18next';

const BandData = ({ t }) => {

  return (
      <> 
        <article id="bandData">
            <div className="article-content">
                <h2>Balkanamera Jazz Q</h2>
                <blockquote className="d-flex">
                    <figure className="logo">
                        <img alt="Balkanamera JazzQ Logo" src="./../images/logos/BJQ Logo.png" />
                    </figure>
                    <p>{t('VAR_ABOUT_BAND')}</p>
                </blockquote>
                <a  data-href="next" 
                    href="#artistData"
                    data-action="scroll" 
                    data-title="Next" 
                    className="next"
                    id="scrollToArtists"
                >
                    {t('VAR_ABOUT_LINK1')} <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </article>      
      </>
  );
} 

export default withTranslation()(BandData);