"use strict";

import { CONF } from "./config.js";

const form = document.querySelector("form");

function sendEmail(params) {
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

function movetoForm() {
  document.querySelector(".message-contact").addEventListener("click", () => {
    form.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  });
}

window.addEventListener("load", (event) => {
  //Scrolling
  document.body.classList.add("stop-scrolling");
  setTimeout(() => {
    document.body.classList.remove("stop-scrolling");
  }, 5000);

  movetoForm();

  //Email
  emailjs.init(CONF.PUBLIC_KEY);

  document.querySelector(".submit-button").addEventListener("click", sendEmail);
});
