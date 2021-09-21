<template>
  <div>
    <!-- Link del Art+iculo -->
    <router-link :to="{ name: 'Articulo' }"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style></style>
