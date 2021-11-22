import React from "react";
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';
import * as Section from './sections/about';

const About = ({ t }) => {

  return (
      <>
        <main className="row" id="about">
            <Helmet>
                <html lang={t('VAR_META_LANG')} />
                <title>{t('VAR_META_TITLE_ABOUT')}</title>
                <meta property="og:description" name="description" content={t('VAR_META_DESC_ABOUT')} />            
                <link rel="stylesheet" href="./../style/about.css" />
            </Helmet>
          
            <Section.Carousel />
          
            <section className="mid-square">                
                <Section.BandData />
                <Section.ArtistData />
            </section>

        </main>
      </>
  );
}

export default withTranslation()(About);