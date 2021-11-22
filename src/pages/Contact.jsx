import React from "react";
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';
import * as Section from './sections/contact'

const Contact = ({ t }) => {
    
  return (
      <>
        <main className="row" id="contact">
            <Helmet>
                <html lang={t('VAR_META_LANG')} />
                <title>{t('VAR_META_TITLE_CONTACT')}</title>
                <meta property="og:description" name="description" content={t('VAR_META_DESC_CONTACT')} />            
                <link rel="stylesheet" href="./../style/contact.css" />
            </Helmet>
          
            <Section.Carousel />
            <Section.Form />
          
        </main>
      </>
  );
}

export default withTranslation()(Contact);