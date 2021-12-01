<template>
  <div>
    <img :src="src" />

    <!-- <h1 v-if="show">{{ msg }}</h1> // Trabaja con display
    <p v-else>ELSE</p> -->

    <!-- <h1 v-show="show">{{ msg }}</h1> -->
    <!-- Este trabaja con visibility -->

    <componente></componente>

    <!-- <button @click="saludar">Click</button> -->

    <!-- <ul>
      <li v-for="(item, index) in lista" :key="index">{{ item }}</li>
    </ul> -->

    <!-- <h1 class="title" :class="{ red }">Esto es un título</h1>
    <button @click="toggleRed">Click</button> -->

    <input type="text" v-model="input" @keydown.enter="saludar()" />
    <p>Resultado: {{ uppercase }}</p>

    <a href="#" @click.prevent="saludar">Boton</a>
  </div>
</template>s

<script>
import Componente from "./components/Componente.vue";

export default {
  components: { Componente },
  data() {
    return {
      lista: [1, 2, 3, 4],
      show: false,
      msg: "HOLA",
      red: false,
      input: "",
      formulario: {
        name: "",
        rut: "",
      },
      src:
        "https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png",
    };
  },

  computed: {
    uppercase() {
      return this.input.toUpperCase();
    },
  },

  methods: {
    saludar() {
      alert("Hola");
    },

    toggleRed() {
      this.red = !this.red;
    },
  },
};
</script>

<style>
.red {
  color: red;
}

/* .blue {
  color: blue;
} */

.title {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
