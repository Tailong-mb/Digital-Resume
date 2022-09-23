<script setup lang="ts">
const moveToForm = () => {
  const form = document.getElementById("myform");
  form.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};
</script>

<template>
  <div class="grid-container">
    <div class="hero-experiences subtitle is-bold">Experiences</div>
    <div class="hero-experiences-content-date title">2022</div>
    <div class="hero-experiences-content-description">
      <div class="hero-experiences-content-description-title">
        <div
          class="hero-experiences-content-description-title-work title is-bold"
        >
          DevOps
        </div>
        <span>-</span>
        <div class="title">Pulsy</div>
      </div>
      <div
        class="hero-experiences-content-description-location subtitle is-italic"
      >
        Villers-lès-Nancy, France
      </div>
      <div class="hero-experiences-content-description-comment text">
        Contribution to the redesign of the log platform (systems and
        applications) to maintain a sufficient level of security.
      </div>
    </div>
    <div class="hero-experiences-content-date title">2019-2020</div>
    <div class="hero-experiences-content-description">
      <div class="hero-experiences-content-description-title">
        <div
          class="hero-experiences-content-description-title-work title is-bold"
        >
          Logic Tutor
        </div>
        <span>-</span>
        <div class="title">University of lorraine</div>
      </div>
      <div
        class="hero-experiences-content-description-location subtitle is-italic"
      >
        Nancy, France
      </div>
      <div class="hero-experiences-content-description-comment text">
        To provide personalized support to undergraduate students in order to
        solve their difficulties in propositional logic. All the students we met
        validated their logic modules.
      </div>
    </div>
    <!-- EDUCATION SECTION -->
    <div class="hero-education subtitle is-bold">Education</div>
    <div class="hero-education-content">
      <div class="hero-education-content-degree">
        <div class="hero-education-content-degree-title subtitle is-bold">
          Philosophy :
        </div>
        <div class="hero-education-content-degree-name subtitle is-italic">
          Master's degree
        </div>
      </div>
      <div class="hero-education-content-degree">
        <div class="hero-education-content-degree-title subtitle is-bold">
          Developper:
        </div>
        <div class="hero-education-content-degree-name subtitle is-italic">
          Two-year degree
        </div>
      </div>
      <div class="hero-education-content-degree-location subtitle is-italic">
        Nancy, France
      </div>
    </div>
    <!-- SKILLS -->
    <div class="hero-skills">
      <div class="hero-project-title subtitle is-bold">Skills</div>
      <ul class="text">
        <li>Angular</li>
        <li>Javascript,Typescript</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    </div>
    <!-- IMAGE -->
    <div class="gifImageContainer">
      <div class="hero-project-title subtitle is-bold">Last Project</div>
      <a href="https://portfolio-yanis-eight.vercel.app/">
        <img src="../assets/images/project.gif" alt="gif of my project" />
      </a>
    </div>
    <!-- MESSAGE -->
    <div class="message-contact" @click="moveToForm()">
      <div class="title">
        I'm <span class="is-italic">always </span>
        <span class="is-bold">happy</span> to talk, don't
        <span class="is-italic">hesitate</span> to contact me.
      </div>
    </div>

    <!-- FROM SECTION -->
    <div class="contact-section">
      <div class="title contact-title is-italic">Contact</div>
      <form id="myform">
        <div class="input-data">
          <input
            type="text"
            name="firstName"
            id="firstName"
            class="subtitle"
            required
          />
          <div class="underline"></div>
          <label class="subtitle" for="firstname">Firstname</label>
        </div>
        <div class="input-data">
          <input
            id="secondName"
            type="text"
            name="secondName"
            class="subtitle"
            required
          />
          <div class="underline"></div>
          <label class="subtitle" for="secondName">Name</label>
        </div>
        <div class="input-data">
          <input
            type="email"
            name="email"
            id="email"
            class="subtitle"
            required
          />
          <div class="underline"></div>
          <label class="subtitle" for="email">Email</label>
        </div>
        <textarea
          placeholder="Put your message"
          type="text"
          required
          name="message"
          class="textarea text"
          id="message"
        ></textarea>
      </form>
      <div class="button-container">
        <button class="submit-button text">Send</button>
      </div>
    </div>
  </div>
</template>
