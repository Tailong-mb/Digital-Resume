<template>
  <div class="load">
    <div class="load-message">
      <div class="letter">W</div>
      <div class="letter" style="animation-delay: 0.05s">E</div>
      <div class="letter" style="animation-delay: 0.1s">L</div>
      <div class="letter" style="animation-delay: 0.15s">C</div>
      <div class="letter" style="animation-delay: 0.2s">O</div>
      <div class="letter" style="animation-delay: 0.25s">M</div>
      <div class="letter" style="animation-delay: 0.3s">E</div>
    </div>
  </div>
</template>

<style scoped>
.load {
  background-color: rgb(239, 239, 236);
  color: rgb(25, 25, 25);
  margin: 0 !important;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 300;
  font-family: "Migra", serif;
  font-size: 6em;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 2s load-out forwards 3.5s;
  cursor: none;
}

.load-message {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  overflow: hidden;
}

.letter {
  animation: 3s letter-out forwards;
}

@keyframes load-out {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes letter-out {
  0% {
    transform: translateY(100px);
    opacity: 1;
  }

  30% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }

  100% {
    transform: translateY(150px);
    opacity: 0;
  }
}

@media (max-width: 550px) and (min-width: 451px) {
  .load {
    font-size: 4rem;
  }
}

@media (max-width: 450px) and (min-width: 351px) {
  .load {
    font-size: 3rem;
  }
}

@media (max-width: 350px) {
  .load {
    font-size: 2rem;
  }
}
</style>
