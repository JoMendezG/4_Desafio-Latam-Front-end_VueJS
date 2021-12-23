<template>
  <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->
  <div>
    <!-- Link del Art+iculo -->
    <router-link :to="{ name: 'Articulo' }"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
