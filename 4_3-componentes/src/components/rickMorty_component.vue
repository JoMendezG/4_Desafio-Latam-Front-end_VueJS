<template>
  <div>
    <ul>
      <li v-for="(personaje, $index) in personajes" :key="$index">
        <img class="imgPersonaje" alt="" v-bind:src="personaje.src" />
        <h1 class="nombrePersonaje">{{ personaje.nombre }}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "rickMorty_Component",
  data: () => ({
    personajes: [
      {
        nombre: "Rick Sanchez",
        src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        nombre: "Morty Smith",
        src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        nombre: "Summer Smith",
        src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
        nombre: "Beth Smith",
        src: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      },
      {
        nombre: "Jerry Smith",
        src: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      },
    ],
  }),
};
</script>

<style>
.imgPersonaje {
  border-radius: 50%;
  width: 125px;
  display: inline-block;
  margin: 15px 0;
}

.nombrePersonaje {
  color: greenyellow;
  font-family: Arial, sans-serif;
  font-weight: lighter;
  display: inline-block;
  position: absolute;
  margin: 50px 20px;
}
</style>
