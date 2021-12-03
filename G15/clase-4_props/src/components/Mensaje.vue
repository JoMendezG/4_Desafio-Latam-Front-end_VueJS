<template>
  <!-- Imprime el mensaje -->
  <h3>{{ msg }}</h3>
</template>

<script>
export default {
  // Guarda el mensaje en una props para que sea leida por app.vue
  props: ["msg"],
};
</script>

<style></style>
