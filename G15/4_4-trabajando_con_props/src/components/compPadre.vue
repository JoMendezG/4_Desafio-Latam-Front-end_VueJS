<template>
  <div class="formulario">
    <!-- 1. Creamos el html base del desafío-->
    <!-- 2. Cramos la variable que no permite guardar el texto o información de la tarea a agregar a través del v-model en el input-->
    <h1>Tareas Pendientes:</h1>
    <input
      type="text"
      placeholder="Ingresa tu nueva tarea"
      v-model="nuevaTarea"
      @keydown.enter="agregarNuevaTarea"
      maxlength="50"
    />
    <!-- 4. Creamos la función agregarNuevaTarea en el botón que se ejecutará cuando hago click -->
    <!-- ***** Agregamos un  @keydown.enter para agregar la tarea automáticamente al apretar el enter y saltando el botón-->
    <button @click="agregarNuevaTarea">Agregar tarea</button>
    <!-- 8. Reflejamos la lista a trvés del componente hijo -->
    <!-- 11. Con : conectamos con el js tareas y así comunicamos con el props enviado al hijo que es este componente -->
    <!-- 19. Llamamos a eliminarTarea de la función creada recientemente y creammos un método nuevo-->
    <Lista :tareas="tareas" @eliminarTarea="borrarTarea"></Lista>
  </div>
</template>

<script>
// 9. Importamos el componente hijo
import Lista from "./compHijo.vue";
export default {
  // 3. Creamos la variable del input en el data donde entrega esta variable nuebaTarea tipo string
  // 7. Creamos el arreglo tareas[] que almacena el listado de tareas
  data() {
    return {
      nuevaTarea: "",
      tareas: [],
    };
  },
  // 5. Al crear la función agregarNuevaTarea se debe definir en methods
  methods: {
    // 6. Queremos que está función agrege la nueva tarea escrita a la lista inferior, por ello debemos crear el arreglo tareas primero
    // 7. Ahora empujaremos la lista de tareas al arreglo a través del push
    agregarNuevaTarea() {
      // Estas tareas son empujadas desde el placeholder de nuevaTareas
      this.tareas.push(this.nuevaTarea);
      // nuevaTarea en un string
      this.nuevaTarea = "";
    },
    // 20. Creamos el método borrarTarea
    // **** Vue entinede que este index esta en @eliminarTarea
    borrarTarea(index) {
      // 21. Aplicamos un splice para eliminar la tarea
      this.tareas.splice(index, 1);
    },
  },
  // 10. Indicamos que es un componente
  components: {
    Lista,
  },
};
</script>

<style scope>
.formulario {
  padding: 50px 0;
}

h1 {
  display: block;
  text-align: center;
  color: #413a73;
  font-family: "Roboto", sans-serif;
}

input {
  display: block;
  margin: 0 auto;
  width: 35%;
  text-align: center;
  border-radius: 50px;
  border: 1px rgb(189, 189, 189) solid;
  height: 36px;
}

button {
  background-color: #413a73;
  border-radius: 50px;
  padding: 10px 0;
  width: 35%;
  color: white;
  border: none;
  margin: 25px auto;
  display: block;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3);
}

button:hover {
  background-color: #574e9d;
}
</style>
