import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
 
const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');
 
  const changeLanguage = (event) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
 
  return (
    <ul id="lg-switch" onChange={changeLanguage} 
        className="d-flex flex-row-reverse align-items-center px-2 py-0 justify-content-end">
      <li itemProp="name" className="px-1">
        <input 
            className="btn-check" 
            type="radio" 
            hidden
            value="en" id="en"
            autocomplete="off"
            name="language" 
            checked={selectedLang === 'en'} 
        />
        <label className="btn" for="en">
            <img className="flag" src="./../images/logos/banner_en.png" />
        </label>
                    
      </li>
      <li itemProp="name" className="px-1">
        <input 
            className="btn-check" 
            type="radio"
            hidden
            value="ro" id="ro" 
            autocomplete="off" 
            name="language" 
            checked={selectedLang === 'ro'} 
        /> 
        <label className="btn" for="ro">
            <img className="flag" src="./../images/logos/banner_ro.png" />
        </label>
      </li>
    </ul>
  )
}
 
export default LangSelector;