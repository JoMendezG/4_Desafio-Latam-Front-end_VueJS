<template>
  <div>
    <navbar-component></navbar-component>
    <router-view />
  </div>
</template>

<script>
import navbarComponent from "./components/navbarComponent.vue";
export default {
  components: {
    navbarComponent,
  },
};
</script>

<style>
body {
  background-color: #f0f0f0;
  font-family: "Open Sans", sans-serif;
}
</style>
