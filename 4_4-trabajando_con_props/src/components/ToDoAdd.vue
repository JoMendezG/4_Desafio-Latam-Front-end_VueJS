<template>
  <div>
    <div class="ingresarTarea">
      <h2 class="tarea">Tarea</h2>
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        v-model="nuevaActividad"
        maxlength="25"
      />
      <button @click="agregarNuevaActividad">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoAdd",
  data: () => ({
    nuevaActividad: "",
  }),
  methods: {
    agregarNuevaActividad() {
      //   Traigo el "nombre", luego su información a través de un this
      this.$emit("nueva-actividad", this.nuevaActividad);
    },
  },
};
</script>

<style>
h1,
h2,
ul {
  font-family: "Brush Script MT", cursive;
}

.tarea {
  display: inline-block;
  padding-right: 20px;
  color: rgb(80, 80, 80);
}

.ingresarTarea {
  text-align: center;
}

input {
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(55, 55, 55);
  background: none;
  color: rgb(80, 80, 80);
  margin-right: 20px;
  height: 30px;
}

input[type="text"]:focus {
}

button {
  background-color: #f57d5f;
  padding: 5px 20px;
  border: none;
  color: white;
}
</style>
