import React, { useState } from "react";
import { useTranslation, withTranslation } from 'react-i18next';

const ContactForm = () => {
    
  const { t } = useTranslation();
    
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="row" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6 form-line">
            <div className="form-group">
                <label htmlFor="name">{t('VAR_FORM_NAME')}:</label>
                <input type="text" className="form-control" placeholder={t('VAR_FORM_NAME_PL')} type="text" id="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">{t('VAR_FORM_MAIL')}:</label>
                <input type="email" className="form-control" placeholder={t('VAR_FORM_MAIL_PL')} id="email" required />
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                <label htmlFor="message">{t('VAR_FORM_MESS')}:</label>
                <textarea className="form-control" id="message" placeholder={t('VAR_FORM_MESS_PL')} required />
            </div>
            <button className="btn btn-default submit" type="submit">
                <i className="fa fa-paper-plane" aria-hidden="true"></i> 
                {status}
            </button>
        </div>
    </form>
  );
};

export default withTranslation()(ContactForm);