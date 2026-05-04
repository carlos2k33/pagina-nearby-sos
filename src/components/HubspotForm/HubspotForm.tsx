
'use client';

import { useEffect } from 'react';
import './HubspotForm.css';

export default function HubspotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
 
      if (window.hbspt) {
     
        window.hbspt.forms.create({
          region: "na1",
          portalId: "50182767",
          formId: "bed969bf-8e9e-45b0-bfd1-157e613cae7e",
          target: "#hubspotForm",
          cssClass: "custom-hubspot-form" // puedes apuntar a esta clase también
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm" />;
}