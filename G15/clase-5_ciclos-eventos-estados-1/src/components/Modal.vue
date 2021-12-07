<template>
  <div class="modal" :class="{ show }">
    <h3>¿Eliminar tarea?</h3>
    <div>
      <button @click="eliminar" class="btn-eliminar">Eliminar</button>
      <button @click="cancelar" class="btn-cancelar">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],

  methods: {
    cancelar() {
      this.$emit("cancelar");
    },

    eliminar() {
      this.$emit("eliminar");
    },
  },
};
</script>

<style scoped>
.modal {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;
}

.modal.show {
  visibility: visible;
  opacity: 1;
}

h3 {
  margin-bottom: 3rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>