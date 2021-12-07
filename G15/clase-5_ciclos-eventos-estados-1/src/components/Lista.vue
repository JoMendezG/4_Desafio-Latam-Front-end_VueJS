<template>
  <div class="list-container">
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        <Item @eliminar="eliminarTarea" :index="index" :tarea="tarea"></Item>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: { Item },
  props: ["tareas"],

  methods: {
    eliminarTarea(e) {
      this.$emit("eliminar", e);
    },
  },
};
</script>

<style scoped>
.list-container {
  margin: 3rem auto;
  width: 50%;
}

li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

li:last-child {
  border: none;
}

li div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}
</style>