<script setup lang="ts">
const blockScroll = () => {
  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = "hidden";
  setTimeout(() => {
    body.style.overflow = "auto";
  }, 5000);
};

onMounted(() => {
  blockScroll();
});
</script>

<template>
  <div id="app">
    <Load />
    <Top />
    <Experience />
    <Bottom />
  </div>
</template>
