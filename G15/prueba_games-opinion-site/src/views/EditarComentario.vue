<template>
  <div class="container">
    <h1 class="mt-5 text-center">
      <!-- Esta viene del mounted -->
      Editando la opinión de:
    </h1>
    <h2 class="my-2 text-center">
      {{ juegoNombreEdit }} {{ juegoSubNombreEdit }}
    </h2>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="exampleInput1"
          v-model="nombre"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Opiniones</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="opinion"
        ></textarea>
      </div>
      <button type="button" class="btn btn-outline-secondary" @click="regresar">
        Regresar
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click="actualizarComentario(id - 1)"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      juegoNombreEdit: "",
      juegoSubNombreEdit: "",
      nombre: "",
      opinion: "",
    };
  },

  methods: {
    regresar() {
      this.$router.go(-1);
    },

    // Método que actualiza el comentario, toma el nombre del juego, nombre del cliente y la opinión
    actualizarComentario() {
      let data = {
        index: this.id - 1,
        opinion: {
          juegoNombreEdit: this.filtrarOpiniones.juegoNombreEdit,
          juegoSubNombreEdit: this.filtrarOpiniones.juegoSubNombreEdit,
          nombre: this.nombre,
          opinion: this.opinion,
        },
      };

      // Con este commit se actualiza el comentario en el store y lo puedo ver actuaizado en la ventana de opiniones
      this.$store.commit("actualizarComentario", data);
      alert(`${this.nombre}, ¡Tu opinión ha sido actualizada!`);
    },
  },

  computed: {
    traerId() {
      return this.$route.params.id - 1;
    },

    filtrarOpiniones() {
      return this.$store.getters.filtrarOpiniones(this.traerId);
    },
  },

  mounted() {
    // Colocamos las mismas variables del modal
    // Estas variables van en el html
    this.nombre = this.filtrarOpiniones.nombre;
    this.opinion = this.filtrarOpiniones.opinion;
    this.juegoNombreEdit = this.filtrarOpiniones.juegoName;
    this.juegoSubNombreEdit = this.filtrarOpiniones.juegoSubName;
  },
};
</script>

<style scoped>
.btn {
  margin-right: 20px;
}
</style>
