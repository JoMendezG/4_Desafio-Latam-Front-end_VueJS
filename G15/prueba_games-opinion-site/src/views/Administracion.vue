<template>
  <div class="container">
    <h1 class="my-5 text-center">Administrando la lista de Opiniones</h1>
    <table v-if="opiniones.length > 0" class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Juego</th>
          <th>Opinión</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, index) in opiniones" :key="index">
          <!-- Enumeramos la opinión -->
          <td>{{ index + 1 }}</td>
          <!-- Nombre del cliente -->
          <td>{{ opinion.nombre }}</td>
          <!-- Nombre de Juego -->
          <td>
            {{ opinion.juegoName }} <br />
            {{ opinion.juegoSubName }}
          </td>
          <td>{{ opinion.opinion }}</td>
          <td style="text-align: right">
            <button
              class="btn btn-outline-danger me-5"
              @click="eliminarComentario(index)"
            >
              Eliminar
            </button>
            <router-link
              :to="{ name: 'EditComentario', params: { id: index + 1 } }"
            >
              <button class="btn btn-success">Editar</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-danger" role="alert" v-else>
      No existen opiniones por administrar.
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    eliminarComentario(index) {
      this.$store.commit("eliminarComentario", index);
    },
  },
  computed: {
    opiniones() {
      return this.$store.state.opiniones;
    },
  },
};
</script>
