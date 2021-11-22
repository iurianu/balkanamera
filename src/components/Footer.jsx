import React from "react";

export default function Footer() {
    return (
        <>
            <ul id="footer" 
                    className="footer_fullwidth">
                <li id="social">
                    <ul>      
                        <li style={{opacity: "0.5"}}>
                            <a  href="http://iurianu.rocks"  
                                style={{opacity: "0.5"}}
                                className="tooltip"
                                rel="follow"
                                >
                                <img src="./../images/logos/copy.png" width="20" height="20" alt="" className="footer_icon" />
                                <span>Copyright</span>
                            </a>
                        </li>
                        <li style={{opacity: "0.5"}}>
                            <a  itemProp="sameAs"  
                                style={{opacity: "0.5"}}
                                href="https://www.linkedin.com/company/balkanamera-jazzq/" 
                                rel="nofollow noopener"
                                className="tooltip"
                                >
                                <img width="20" height="20" src="./../images/logos/li.png" alt="" className="footer_icon" />
                                <span>Linkedin</span>
                            </a>
                        </li>
                        <li style={{opacity: "0.5"}}>
                            <a  itemProp="sameAs"  
                                style={{opacity: "0.5"}}
                                href="https://www.youtube.com/channel/UC3WCY80tlhv1nF1alju0dqw" 
                                rel="nofollow noopener"
                                className="tooltip"
                                >
                                <img src="./../images/logos/yt.png" alt="" width="20" height="20" className="footer_icon" />
                                <span>Youtube</span>
                            </a>
                        </li>
                        <li style={{opacity: "0.5"}}>
                            <a  itemProp="sameAs"  
                                style={{opacity: "0.5"}}
                                href="https://www.facebook.com/balkanamera/" 
                                rel="nofollow noopener"
                                className="tooltip"
                                >
                                <img src="./../images/logos/fb.png" alt="" 
                                    width="15" height="15" 
                                    className="footer_icon" 
                                />
                                <span>Facebook</span>
                            </a>
                        </li>
                    </ul>
                </li>  
            </ul>
            <a id="footer_trigger" className="trigger_active" href="#"></a>
        </>
    )
}        