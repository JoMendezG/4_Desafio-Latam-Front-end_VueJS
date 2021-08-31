<template>
  <div>
    <h1>Random Gif Cat</h1>

    <!-- @submit para poder obtener la info de los campos, y .prevent para que funcione el formulario -->
    <form @submit.prevent="generarNuevoGatitoUrl()">
      <label for="titulo">Titulo:</label>
      <input type="text" required name="titulo" v-model="formulario.titulo" />

      <br />

      <label for="filtro">Filtro:</label>
      <select required name="filtro" v-model="formulario.filtro">
        <option value="" selected disabled></option>
        <option value="blur">Blur</option>
        <option value="mono">Mono</option>
        <option value="sepia">Sepia</option>
        <option value="negative">Negative</option>
        <option value="paint">Paint</option>
      </select>

      <br />

      <label for="color">Color:</label>
      <select required name="color" v-model="formulario.color">
        <option value="" selected disabled></option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="green">Verde</option>
        <option value="purple">Morado</option>
        <option value="orange">Naranjo</option>
      </select>

      <br />

      <label for="tamaño">Tamaño:</label>
      <input
        type="number"
        name="tamaño"
        required
        step="100"
        min="100"
        max="900"
        v-model.number="formulario.tamaño"
      />

      <br />

      <button type="submit">Obtener mi gatito</button>
    </form>

    <!-- Previsualizar los resultados de los campos del formulario -->
    <!-- <pre>formulario: {{ formulario }}</pre> -->

    <img alt="gatito" :src="gatitoUrl" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    gatitoUrl: "",
    formulario: {
      titulo: null,
      filtro: null,
      color: null,
      tamaño: null,
    },
  }),
  methods: {
    // Función que se activa con el submint
    generarNuevoGatitoUrl() {
      console.log(this.formulario);
      this.gatitoUrl = `https://cataas.com/cat/gif/says/${this.formulario.titulo}?filter=${this.formulario.filtro}&color=${this.formulario.color}&width=${this.formulario.tamaño}&height=${this.formulario.tamaño}`;
    },
  },
};
</script>

https://cataas.com/cat/gif/says/hola?filter=sepia&color=red&width=400&height=400

<style></style>
