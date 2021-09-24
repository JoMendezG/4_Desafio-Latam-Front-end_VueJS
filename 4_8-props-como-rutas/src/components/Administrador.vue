<template>
  <div>
    <header
      class="masthead"
      style="background-image:url('assets/img/administrador.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>Administración</h1>
              <span v-text="titulo" class="subheading"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["administrador"],
  computed: {
    titulo() {
      return `${this.administrador}`;
    },
  },
};
</script>

<style></style>
