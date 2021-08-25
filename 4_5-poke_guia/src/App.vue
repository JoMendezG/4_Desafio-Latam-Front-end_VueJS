<template>
  <div id="app">
    <div>
      <label for=""> Nombre: </label>
      <input type="text" v-model="nombreDelPokemon" />
      <button @click="clickBotonBuscar()">Buscar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nombreDelPokemon: "",
  }),
  methods: {
    clickBotonBuscar() {
      console.log("nombre del pokemon =>", this.nombreDelPokemon);
    },
  },
  created() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombreDelPokemon}`)
      .then((response) => response.json())
      // Aquí me traigo toda la DB de la api
      .then((json) => console.log(json));
  },
};
</script>

<style></style>
