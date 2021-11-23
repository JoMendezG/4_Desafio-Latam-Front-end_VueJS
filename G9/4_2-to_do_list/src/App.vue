<template>
  <div class="lista">
    <h1>Crear una nueva tarea</h1>
    <div class="ingresarTarea">
      <h2 class="tarea">Tarea</h2>
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        v-model="nuevaActividad"
      />
      <button @click="agregarNuevaActividad">Agregar</button>
    </div>
    <h2>Lista</h2>
    <ul>
      <li v-for="(actividad, $index) in actividades" :key="$index">
        {{ actividad }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nuevaActividad: "",
    actividades: [],
  }),
  methods: {
    agregarNuevaActividad() {
      this.actividades.push(this.nuevaActividad);
      this.nuevaActividad = "";
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

.lista {
  background-color: white;
  width: 60%;
  border: 10px #77b779 solid;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding-top: 20px;
  color: #f4b498;
  margin: 0;
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

h2 {
  color: rgb(80, 80, 80);
  text-align: center;
}

li {
  color: rgb(80, 80, 80);
  margin: 0 100px;
}
</style>
