import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation, withTranslation } from 'react-i18next';
import * as Section from './sections/events'

function Events() {
    
    const { t } = useTranslation();
    
    const artistName = "balkanamera";
    
    useEffect(() => {
        window.FB.XFBML.parse();
    }, []);

    return (
    <>
        <main className="row" id="events">
            <Helmet>
                <html lang={t('VAR_META_LANG')} />
                <title>{t('VAR_META_TITLE_EVENTS')}</title>
                <meta property="og:description" name="description" content={t('VAR_META_DESC_EVENTS')} />            
                <link rel="stylesheet" href="./../style/events.css" />
            </Helmet>
            
            <Section.Carousel />
            <section class="mid-square d-none d-sm-block">                
                <div className="fb-page"
                    data-href={`https://www.facebook.com/${artistName}`}
                    data-tabs="timeline"
                    data-width="750"
                    data-height="450"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                >
                    <div className="fb-xfbml-parse-ignore">
                      <blockquote cite={`https://www.facebook.com/${artistName}/events`}>
                        <a
                          href={`https://www.facebook.com/${artistName}/events`}
                          target="_blank" rel="nofollow noopener">
                            <h2>{t('VAR_EVENTS_HEADLINE')}</h2>
                        </a>
                      </blockquote>
                    </div>
                </div>
                <div class="fb-path w-100 d-flex justify-content-center">
                    <p>{t('VAR_EVENTS_INFOTEXT')} <a href="https://www.facebook.com/balkanamera" rel="nofollow noopener" target="_blank">{t('VAR_FB_PAGE')}</a>!</p>
                </div> 
            </section>
            <section class="mid-square d-flex d-sm-none">                
                <div className="fb-page"
                    data-href={`https://www.facebook.com/${artistName}`}
                    data-tabs="timeline"
                    data-width="300"
                    data-height="auto"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                >
                    <div className="fb-xfbml-parse-ignore">
                      <blockquote cite={`https://www.facebook.com/${artistName}/events`}>
                        <a
                          href={`https://www.facebook.com/${artistName}/events`}
                          target="_blank" rel="nofollow noopener">
                            <h2>{t('VAR_EVENTS_HEADLINE')}</h2>
                        </a>
                      </blockquote>
                    </div>
                </div>
                <div class="fb-path d-flex justify-content-center">
                    <p>{t('VAR_EVENTS_INFOTEXT')} <a href="https://www.facebook.com/balkanamera" rel="nofollow noopener" target="_blank">{t('VAR_FB_PAGE')}</a>!</p>
                </div> 
            </section>            

        </main>
    </>
  );
}

export default withTranslation()(Events);