<template>
  <div class="contenido">
    <div class="izquierda">
      <img src="./assets/img/logo.png" alt="" />
      <h2 class="tPokedex">Busca tu pokemon favorito</h2>
      <!-- 10. Creamos el formulario que permitirá cambiar de pokemon -->
      <!-- 11. Em el input aplicamos que el enter cargue la api nuevamente y llame a la variable namePokemon a cambiar -->
      <input @keydown.enter="cargarApi" v-model="namePokemon" type="text" />
      <button @click="cargarApi">Buscar pokemon</button>
    </div>
    <div class="derecha" :style="backgroundPokemon">
      <!-- 7. Cargo el nombre del pokemon -->
      <h2 class="namePokemon">{{ namePokemon }}</h2>

      <ul class="typeListUl">
        <!-- 9. Creo u v-for que elistará las clases del pokemon REPITO ESTO CON MOVIMIENTOS Y HABILIDADES-->
        <li class="typeList" v-for="(type, index) in pokeType" :key="index">
          {{ type.type.name }}
        </li>
      </ul>

      <!-- 6. Cargamos la foto del pokemon según la función  pokePicture-->
      <div class="imgPokemon">
        <img :src="pokePicture" alt="" />
      </div>

      <div class="mov_hab">
        <div class="Movimientos">
          <h3>Movimeintos:</h3>
          <ul class="ulMovimientos">
            <li v-for="(mov, index) in movPokemon" :key="index">
              {{ mov.move.name }}
            </li>
          </ul>
        </div>

        <div class="Habilidades">
          <h3>Habilidaes:</h3>
          <ul class="ulHabilidades">
            <li v-for="(hab, index) in habPokemon" :key="index">
              {{ hab.ability.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namePokemon: "pikachu",
      pokedata: {},
      listaDeColores: {
        fire: "#fb6c6c",
        electric: "#ffce4b",
        grass: "#48d0b0",
        normal: "#a0a0a0",
        water: "#58aaf6",
        dark: "#413a4c",
        fighting: "#d96e36",
        steel: "#e6f3ea",
        poison: "#b892bc",
        psychic: "#8d4199",
        rock: "#d39228",
        ground: "#a49b48",
        ice: "#02c0c9",
        fairy: "#ecb0d0",
      },
    };
  },
  methods: {
    // 1. Cargamos la api
    cargarApi() {
      // 2. Con fetch llamamos la api con una variable nombrePokemon para buscar al pokemon específico
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon}`)
        .then((response) => response.json())
        .then((data) => {
          // 3. Utilizamos la variable pokedata que almacenara la data o info de toda la api
          this.pokedata = data;
        });
    },
  },
  created() {
    // 4. Cargamos nuestra función que llama a la api
    this.cargarApi();
  },
  computed: {
    // 5. Creamos nuestra función que cargará la foto del pokemon
    pokePicture() {
      // Sí pokedata NO encuentra la propiedad sprietes retorna vacio
      if (!Object.prototype.hasOwnProperty.call(this.pokedata, "sprites")) {
        return;
      }

      return this.pokedata.sprites.front_default;
    },

    // 8. Creo la función que llamá al tipo de pokemon
    pokeType() {
      if (!Object.prototype.hasOwnProperty.call(this.pokedata, "types")) {
        return;
      }

      return this.pokedata.types;
    },

    backgroundPokemon() {
      if (!Object.prototype.hasOwnProperty.call(this.pokedata, "types")) {
        return;
      }

      let color = this.listaDeColores[this.pokedata.types[0].type.name];
      console.log(color);

      return `background-color: ${color}`;
    },

    movPokemon() {
      if (!Object.prototype.hasOwnProperty.call(this.pokedata, "moves")) {
        return;
      }

      return this.pokedata.moves;
    },

    habPokemon() {
      if (!Object.prototype.hasOwnProperty.call(this.pokedata, "abilities")) {
        return;
      }

      return this.pokedata.abilities;
    },
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}

.contenido {
  display: flex;
  justify-content: center;
}

.izquierda {
  width: 40%;
  margin-top: 25px;
  background-color: #f9f9f9;
}

.derecha {
  background-color: #a0a0a0;
  width: 40%;
  margin-top: 25px;
}

.namePokemon {
  color: white;
  margin: 30px;
}

.imgPokemon {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
}

.imgPokemon img {
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  transform: scale(5);
  transform: translate(100px 0);
}

.typeList {
  display: inline-block;
  margin-right: 20px;
  padding: 0;
  color: white;
  background-color: #ffffff48;
  padding: 8px 15px;
  border-radius: 50px;
}

.typeListUl {
  padding: 0px;
  margin-left: 30px;
}

.mov_hab {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
}

.Movimientos,
.Habilidades {
  color: #707070;
  width: 50%;
}
.Movimientos h3,
.Habilidades h3 {
  color: white;
  width: 50%;
}

.ulMovimientos,
.ulHabilidades {
  background-color: white;
  border-radius: 10px;
  margin: 20px 15px;
  list-style: none;
  padding: 10px 30px;
  overflow: auto;
  height: 150px;
}

.ulHabilidades {
  margin-right: 30px;
}

.Movimientos h3,
.Habilidades h3 {
  padding-left: 20px;
}

.izquierda img {
  width: 80%;
  display: block;
  margin: 0 auto;
}

.tPokedex {
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 28px;
  font-weight: 100;
}

input {
  width: 80%;
  display: block;
  margin: 0 auto;
  height: 36px;
  border-radius: 36px;
  border: none;
  background-color: #e8e8e8;
  padding: 0 10px;
}

button {
  width: 80%;
  height: 36px;
  border-radius: 50px;
  margin: 25px auto;
  display: block;
  background-color: #ffcb05;
  border: 3px #155ea3 solid;
  color: #155ea3;
}
</style>
