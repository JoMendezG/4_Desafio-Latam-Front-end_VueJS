<template>
  <div>
    <!-- 13. Creamos un ul li para crear el listado -->
    <!-- 14. En li realizamos un v-for para que las tareas se desplieguen como una lista hacia abajo y no en un mismo item hacia el lado -->
    <ul>
      <!-- * v-for requiere una sintaxis especial en forma de `item in items`, donde los items son la matriz de datos de origen y el item es un ALIAS para el elemento de matriz que se está iterando -->
      <!-- ** En palabras simples itemTarea es solo un nombre que se debe utilizar dentro de {{}} y se pone in tareas porque es la prop que nos trae el padre con la tarea a agregar -->
      <li
        class="listadoTareas"
        v-for="(itemTarea, index) in tareas"
        :key="index"
      >
        <!-- 15. Añadiremos al lado del texto de la tarea un botón que nos permitirá eliminar la tarea -->
        <!-- 16. Creamos la función eliminarTarea que se activa al hacer click en el botón -->
        <button class="btnDelete" @click="eliminarTarea(index)">X</button>
        {{ itemTarea }}
      </li>
    </ul>
  </div>
</template>

<script>
// 12. Llamamos a la props tareas
export default {
  props: ["tareas"],
  // 17. Creamos el método de la función eliminarTarea
  methods: {
    eliminarTarea(index) {
      // 18. Creamos un emit para comunicar al padre que tarea se debe eliminar, ya que vienen de allá, acá solo la dibujamos
      // *** eliminarTarea es un nombre nuevo que va en el componente padre
      this.$emit("eliminarTarea", index);
    },
  },
};
</script>

<style scope>
ul {
  display: block;
  margin: 0 auto;
  width: 35%;
  list-style: none;
  padding-left: 0px;
}

.btnDelete {
  margin: 5px 0;
  margin-right: 25px;
  display: inline-block;
  width: 40px;
  background-color: #f5a580;
}

.btnDelete:hover {
  background-color: #fab899;
}
</style>
