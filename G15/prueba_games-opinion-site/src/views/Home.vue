<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="my-5">Listado de juegos disponibles</h1>
      </div>

      <!-- For para llamar a los juegos -->
      <div
        v-for="(juegos, index) in juegosTLOZ"
        :key="index"
        class="col-lg-3 col-sm-6 my-3"
      >
        <div class="card" style="width: 18rem">
          <!-- Agregar los : para vincular la información -->
          <img :src="juegos.background_image" class="card-img-top" />
          <div class="card-body flex-lg-column">
            <h5 class="card-title fw-normal">{{ juegos.name }}</h5>
            <h6 class="card-subtitle fw-normal">{{ juegos.subName }}</h6>
            <hr />
            <p><b>Rating:</b> {{ juegos.rating }}</p>
            <p><b>Lanzamiento:</b> {{ juegos.released }}</p>
            <p><b>Plataformas:</b> {{ juegos.plataformas }}</p>

            <!-- Botón que permite opinar sobre el juego -->
            <!-- Dentro del paréntesis entregamos el nombre del juego directamente -->
            <button
              type="button"
              class="btn btn-success align-self-end"
              data-bs-toggle="modal"
              data-bs-target="#modal-opinion"
              @click="cargarJuego(juegos.name, juegos.subName)"
            >
              Opinar
            </button>
          </div>
        </div>
      </div>
      <!-- Componente modal que se activa cuanso se seleccione el juego -->
      <!-- Llamo a la prop del modal que entregará los valores a juego seleccionado y este a la junción cargar juego -->
      <Modal
        :propNombreJuego="nombreJuegoSeleccionado"
        :propSubNombreJuego="subNombreJuegoSeleccionado"
      ></Modal>
    </div>
  </div>
</template>

<script>
// Importamos el json con el listado de los juegos
import juegosTLOZ from "../../games.json";
// Importamos Modal
import Modal from "../components/modalComponent.vue";
export default {
  data() {
    return {
      // Retornamos la información de los juegos del json
      juegosTLOZ: juegosTLOZ,
      nombreJuegoSeleccionado: "",
      subNombreJuegoSeleccionado: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    cargarJuego(nombreJuego, subNombreJuego) {
      // Este juego es = a propJuegoModal
      this.nombreJuegoSeleccionado = nombreJuego;
      this.subNombreJuegoSeleccionado = subNombreJuego;
    },
  },
};
</script>

<style scoped>
img {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.card {
  background-color: white;
  border-radius: 0px;
  border: none;
}

.card-img-top {
  height: 140px;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 280px;
}

.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

p {
  margin-bottom: 5px;
  font-size: 13px;
}

button {
  width: 100%;
  margin-top: auto;
}
</style>
