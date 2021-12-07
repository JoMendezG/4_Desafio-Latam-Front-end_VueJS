<template>
  <div>
    <p>{{ index + 1 }} - {{ tarea }}</p>
    <span @click="eliminarTarea">Eliminar</span>

    <Modal
      @eliminar="confirmarEliminacion"
      @cancelar="ocultarModal"
      :show="show"
    ></Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  props: ["index", "tarea"],
  components: { Modal },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    eliminarTarea() {
      this.show = true;
    },

    ocultarModal() {
      this.show = false;
    },

    confirmarEliminacion() {
      this.show = false;
      this.$emit("eliminar", this.index);
    },
  },
};
</script>


<style scoped>
span {
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
</style>