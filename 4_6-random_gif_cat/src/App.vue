<template>
  <div>
    <h1>Random Gif Cat</h1>

    <form action="">
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
        <option value="pixel">Pixel</option>
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
        v-model.number="formulario.tamño"
      />

      <button type="submint">Obtener mi gatito</button>
    </form>

    <img src="" alt="gatito" class="gatito" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    formulario: {
      titulo: null,
      filtro: null,
      color: null,
      tamaño: null,
    },
  }),
};
</script>

<style></style>
