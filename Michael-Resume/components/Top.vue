<template>
  <div class="grid-container">
    <div class="hero-header-logo title"><span>M</span></div>
    <div class="hero-header-information">
      <div class="title name is-bold">Michael BARDOU</div>
      <div class="subtitle">22/11/1997</div>
      <div class="subtitle">michael.bardou@icloud.com</div>
    </div>
    <div class="hero-header-presentation">
      <p class="text">
        I am a web developer who is passionate about building web applications.
        I am experienced in both front-end and back-end web development, and I
        love challenge myself with both technologies.
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero-header-information {
  grid-column: 4/7;
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-self: center;
}

.name {
  margin-bottom: 3px;
}

.hero-header-presentation {
  grid-column: 8/13;
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-self: center;
}
</style>
