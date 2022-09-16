"use strict";

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#myForm").then(
  function (response) {
    console.log("SUCCESS!", response.status, response.text);
  },
  function (error) {
    console.log("FAILED...", error);
  }
);
