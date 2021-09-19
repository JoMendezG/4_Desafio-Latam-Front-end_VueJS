<template>
  <div class="lista">
    <h1>Crear una nueva tarea</h1>

    <ToDoAdd @nueva-actividad="agregarNuevaActividad" />

    <ToDoList
      :actividades="actividades"
      @eliminar-actividad="eliminarActividad"
    />
  </div>
</template>

<script>
import ToDoList from "./ToDoList.vue";
import ToDoAdd from "./ToDoAdd.vue";

export default {
  name: "ToDo",
  data: () => ({
    actividades: [],
  }),
  methods: {
    agregarNuevaActividad(nuevaActividad) {
      this.actividades.push(nuevaActividad);
    },
    eliminarActividad(eliminarActividad) {
      this.actividades.splice(eliminarActividad);
    },
  },
  components: { ToDoList, ToDoAdd },
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
</style>
