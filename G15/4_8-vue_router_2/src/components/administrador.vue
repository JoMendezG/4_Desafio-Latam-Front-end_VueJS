<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('/assets/img/chevrolet-blazer.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>
                <strong>{{ tipoAdmin }}</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    tipoAdmin() {
      let tipo = this.$route.params.tipo.toLowerCase();
      let mensajeAdmin = "Lo siento, esta ruta no existe";
      if (tipo === "simple") {
        mensajeAdmin = "Bienvenido a la página de Administración";
      } else if (tipo === "avanzado") {
        mensajeAdmin =
          "Esta página de administración está en construcción. Intente como administrador simple";
      }

      return mensajeAdmin;
    },
  },
};
</script>

<style></style>
