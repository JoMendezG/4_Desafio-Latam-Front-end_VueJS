<template>
  <div>
    <h2>Lista</h2>
    <ul>
      <li v-for="(actividad, $index) in actividades" :key="$index">
        {{ actividad }}
        <button class="btnEliminar" @click="eliminarTarea">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    actividades: { type: Array, required: true },
  },
  methods: {
    eliminarTarea() {
      this.$emit("eliminar-actividad", this.eliminarActividad);
    },
  },
};
</script>

<style scoped>
h1,
h2,
ul {
  font-family: "Brush Script MT", cursive;
}

h2 {
  color: rgb(80, 80, 80);
  text-align: center;
}

li {
  color: rgb(80, 80, 80);
  margin: 0 100px;
}

.btnEliminar {
  background-color: white;
  padding: 5px 10px;
  border: none;
  color: #f57d5f;
}

ul {
  width: 550px;
  margin: 0 auto;
}
</style>
