<template>
  <div>
    <div v-if="!cargando">
      <Agregar @nueva-tarea="procesarTarea"></Agregar>

      <Lista @eliminar="eliminarTarea" :tareas="tareas"></Lista>
    </div>
    <div v-else class="loader">
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import Agregar from "./components/Agregar.vue";
import Lista from "./components/Lista.vue";

import DB from "./Tareas.js";

export default {
  components: { Agregar, Lista },

  data() {
    return {
      tareas: [],
      cargando: true,
    };
  },

  methods: {
    procesarTarea(e) {
      this.tareas.push(e);
    },

    eliminarTarea(e) {
      this.tareas.splice(e, 1);
    },
  },

  created() {
    setTimeout(() => {
      this.tareas = DB.tareas;
      this.cargando = false;
    }, 3000);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.loader p {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3rem;
}
</style>
