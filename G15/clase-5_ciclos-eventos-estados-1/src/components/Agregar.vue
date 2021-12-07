<template>
  <div>
    <h1>Lista de tareas</h1>
    <div class="input-container">
      <p>Tarea:</p>
      <input
        v-model="tarea"
        placeholder="Ingresa nueva tarea"
        type="text"
        @keydown.enter="agregarTarea"
      />
      <button @click="agregarTarea">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarea: "",
    };
  },

  methods: {
    agregarTarea() {
      this.$emit("nueva-tarea", this.tarea);
      this.tarea = "";
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
}
.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 18px;
}

input {
  padding: 0.25rem;
  margin-right: 0.5rem;
}

button {
  padding: 0.25rem 1rem;
  cursor: pointer;
}
</style>