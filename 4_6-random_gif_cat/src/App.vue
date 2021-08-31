<template>
  <div>
    <h1>Random Gif Cat</h1>

    <!-- @submit para poder obtener la info de los campos, y .prevent para que funcione el formulario -->
    <form @submit.prevent="generarNuevoGatitoUrl()">
      <div style="text-align: center">
        <label for="titulo">Titulo:</label>
        <input type="text" required name="titulo" v-model="formulario.titulo" />

        <br />
        <br />

        <label for="filtro">Filtro:</label>
        <select
          style="height:21px; padding: 1px 2px; width:158px"
          required
          name="filtro"
          v-model="formulario.filtro"
        >
          <option value="" selected disabled></option>
          <option value="blur">Blur</option>
          <option value="mono">Mono</option>
          <option value="sepia">Sepia</option>
          <option value="negative">Negative</option>
          <option value="paint">Paint</option>
        </select>

        <br />
        <br />

        <label for="color">Color:</label>
        <select
          style="height:21px; padding: 1px 2px; width:158px"
          required
          name="color"
          v-model="formulario.color"
        >
          <option value="" selected disabled></option>
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="green">Verde</option>
          <option value="purple">Morado</option>
          <option value="orange">Naranjo</option>
        </select>

        <br />
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
        <br />

        <button type="submit">Obtener mi gatito</button>
      </div>
    </form>

    <!-- Previsualizar los resultados de los campos del formulario -->
    <!-- <pre>formulario: {{ formulario }}</pre> -->

    <img :src="gatitoUrl" />
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

<style>
form {
  background-color: #f0807f;
  padding: 20px;
}

input,
select {
  width: 150px;
}

label {
  width: 60px;
  display: inline-block;
  text-align: right;
  padding-right: 15px;
}

html {
  background-color: #acd8e3;
}

h1 {
  text-align: center;
  font-family: roboto;
}

img {
  margin: 40px auto;
  display: block;
}
</style>
