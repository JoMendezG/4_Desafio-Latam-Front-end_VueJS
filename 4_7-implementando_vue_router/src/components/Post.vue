<template>
  <div>
    <router-link :to="paginar(true)">Siguiente</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
