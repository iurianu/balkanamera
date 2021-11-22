import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation, withTranslation } from 'react-i18next';
import { LangSelector } from "./";

function Navigation(props) {
    
    const { t } = useTranslation();
    
    return (
        <>
            <nav 
                className="row top align-items-center justify-content-between"
                itemScope="itemScope"
                itemType="http://schema.org/SiteNavigationElement"
            >
                <a role="button" 
                    id="nav-action" 
                    data-href="self"
                    data-toggle="collapse"
                    data-target="#navigation" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-label="Toggle navigation"                     
                    aria-hidden="false" 
                    className="navbar-toggler bars"
                >
                    <span id="toggle-nav" className="navbar-toggle-line bar"></span>
                </a>
                <div className="navbar-collapse collapse p-relative justify-content-between" 
                    id="navbarSupportedContent" 
                    itemScope 
                    itemType="http://schema.org/SiteNavigationElement">
                    <ul id="navigation" 
                        className="d-flex flex-column flex-md-row align-items-center pl-4 pr-5 py-0" >
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/home" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="home" 
                                itemProp="url" to="/" >{t('VAR_MENU_HOME')}</NavLink>
                        </li>
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/about" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="active" 
                                itemProp="url" to="/about" >{t('VAR_MENU_ABOUT')}</NavLink>
                        </li>
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/video" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="active" 
                                itemProp="url" to="/video" >{t('VAR_MENU_VIDEO')}</NavLink>
                        </li>
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/audio" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="active" 
                                itemProp="url" to="/audio" >{t('VAR_MENU_AUDIO')}</NavLink>
                        </li>
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/news" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="active" 
                                itemProp="url" to="/news" >{t('VAR_MENU_EVENTS')}</NavLink>
                        </li>
                        <li itemProp="name" className={`px-2 ${props.location.pathname === "/pages/contact" ? "active" : ""}`}>
                            <NavLink className="" 
                                activeClassName="active" 
                                itemProp="url" to="/contact" >{t('VAR_MENU_CONTACT')}</NavLink>
                        </li>
                    </ul>

                    <LangSelector />
                    
                </div>
            
            </nav>
        </>
    )
}

const TopBar = withRouter(Navigation);

export default withTranslation()(TopBar);