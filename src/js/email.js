"use strict";

import { CONF } from "./config.js";

emailjs.init(CONF.PUBLIC_KEY);

function sendEmail(params) {
  let form = document.getElementById("myform");

  emailjs.sendForm(CONF.SERVICE_ID, CONF.TEMPLATE_ID, form).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("firstName").value = "";
      document.getElementById("secondName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

document.querySelector(".submit-button").addEventListener("click", sendEmail);
