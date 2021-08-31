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
    guardarPokemon: this.guardarPokemon = datosDelPokemon
  }),
  methods: {
    clickBotonBuscar() {
      console.log("nombre del pokemon =>", this.nombreDelPokemon);
    },
    pokemon_name() {
      return this.datosDelPokemon.name;
    },
    callApi() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombreDelPokemon}`)
        // Asi me trae los 1118 pokemones y no 20
        .then((response) => {
          return response.json();
        })
        // Aqui puedo visualizar los 1118 pokemones en la consola
        .then((datosDelPokemon) => {
          console.log({ listaPokemones: datosDelPokemon });
        });
    },
  },
  created() {},
};
</script>

<style></style>
