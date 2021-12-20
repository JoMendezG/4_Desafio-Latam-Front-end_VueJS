<template>
  <div class="body">
    <h1>Random Gif Cat</h1>

    <div class="formulario">
      <div class="fila">
        <div class="izquierda">
          <label for="">Titulo</label>
        </div>
        <!-- 3. Incorporamos todas las variables correspondientes -->
        <div class="derecha">
          <input v-model="formulario.titulo" type="text" />
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Filtro</label>
        </div>
        <div class="derecha">
          <select v-model="formulario.filtro">
            <option v-for="filtro in filtros" :key="filtro" :value="filtro">
              {{ filtro }}
            </option>
          </select>
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Color</label>
        </div>
        <div style="display: flex" class="derecha">
          <select style="width: 90%" v-model="formulario.color">
            <option
              v-for="(color, index) in colores"
              :key="index"
              :value="color.valor"
            >
              {{ color.nombre }}
            </option>
          </select>
          <div :style="muestraColor" class="cajaColor"></div>
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Tamaño Letra</label>
        </div>
        <div class="derecha">
          <input v-model="formulario.letra" type="number" />
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Tamaño Giff</label>
        </div>
        <div class="derecha">
          <input v-model="formulario.tamano" type="number" />
        </div>
      </div>
    </div>

    <!-- 4. Llamamos a la api en el boton -->
    <button @click="urlGatitosApi">Obtener Mi Gatito</button>
    <!-- 5. Llamamos la variable de urlgatos para cargar la foto -->
    <img class="fotoGato" :src="urlGatitos" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 1. Creamos las variables del formulario
      colores: [
        { valor: "red", nombre: "Rojo" },
        { valor: "pink", nombre: "Rosa" },
        { valor: "green", nombre: "Verde" },
        { valor: "blue", nombre: "Azul" },
        { valor: "yellow", nombre: "Amarillo" },
        { valor: "black", nombre: "Negro" },
      ],

      filtros: ["none", "blur", "mono", "sepia", "negative", "paint", "pixel"],

      // Valor default
      formulario: {
        titulo: null,
        filtro: "none",
        color: "red",
        letra: null,
        tamano: null,
      },

      urlGatitos: "",
    };
  },
  methods: {
    // 2. Creamos el método que carga la url con las variables
    urlGatitosApi() {
      //https://cataas.com/cat/gif/says/hola?filter=paint&color=pink&size=12&width=100&height=300
      this.urlGatitos = `https://cataas.com/cat/gif/says/${this.formulario.titulo}?filter=${this.formulario.filtro}&color=${this.formulario.color}&size=${this.formulario.letra}&width=${this.formulario.tamano}&height=${this.formulario.tamano}`;
    },
  },
  computed: {
    muestraColor() {
      return `background-color: ${this.formulario.color}`;
    },
  },
};
</script>

<style>
.body {
  background-color: #add8e6;
  font-family: "Roboto", sans-serif;
  padding-bottom: 150px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  padding: 50px 0;
}

.formulario {
  background-color: lightcoral;
  padding: 25px 0;
}

.fila {
  padding: 10px 0;
  width: 40%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.izquierda {
  width: 30%;
}

.derecha {
  width: 70%;
}

select,
input {
  margin-left: 15px;
  width: 100%;
}

.redondo {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50px;
}

button {
  margin: 20px auto;
  display: block;
  background-color: #2c3e50;
  border: none;
  height: 36px;
  padding: 0 15px;
  border-radius: 50px;
  color: white;
  font-weight: bold;
}

.fotoGato {
  display: block;
  margin: 0 auto;
}

.cajaColor {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin-left: 20px;
}
</style>
