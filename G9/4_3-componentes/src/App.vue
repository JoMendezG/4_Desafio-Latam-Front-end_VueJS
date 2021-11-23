<template>
  <div id="app">
    <rickMorty_Component />
  </div>
</template>

<script>
import rickMorty_Component from "./components/rickMorty_component.vue";

export default {
  name: "App",
  components: {
    rickMorty_Component,
  },
};
</script>

<style>
body {
  background-image: url(../public/background.png);
}
</style>
