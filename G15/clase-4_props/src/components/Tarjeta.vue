<template>
  <div>
    <p>Ingresa tu número de cuenta</p>
    <input type="text" v-model="numero" />
    <!-- evento click llama al emit pagar -->
    <button @click="pagar">Pagar</button>
  </div>
</template>

<script>
export default {
  // Guardamos el input
  data() {
    return {
      // Guardo la variable numero del v-model
      numero: "",
    };
  },
  methods: {
    pagar() {
      let aceptado = true;
      //   evento pagar
      //   debemos rescatar el emit en el componente de app
      this.$emit("pagar", {
        //   data:
        aceptado: aceptado,
        numero: this.numero,
      });
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  max-width: 500px;
  text-align: center;
}
</style>
