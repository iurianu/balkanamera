import React, { useState, useEffect } from "react";
import { withTranslation } from 'react-i18next';
import { ContactForm } from "./";

const Form = ({ t }) => {

  return (
      <> 
      <section className="mid-square" id="contactForm">
          <h1 class="section-header">
              Get in Touch with Us
          </h1>
          <div class="container-fluid">
              
                <ContactForm />
              
          </div>          
      </section>
      </>
  );
}                  

export default withTranslation()(Form);