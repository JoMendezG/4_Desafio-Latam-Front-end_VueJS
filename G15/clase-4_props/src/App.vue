<template>
  <div>
    <!-- Prevent -->
    <!-- 1. Prevent permite que no se recargue la pagina -->
    <a href="#" @click.prevent="buttonMethod">Click me!</a>
    <hr />

    <!-- Envento de teclado -->
    <!-- 3. Guarda un evento especídfico de teclado en este caso el enter. -->
    <input
      type="text"
      placeholder="Texto"
      v-model="input"
      @keydown.enter="teclado"
    />

    <hr />

    <!-- 4. Como enviar datos el hijo al padre, con emit -> ir a componente emit -->
    <!-- 8. Utilizamos el componente -->
    <!-- 9. Hacemos que muestre el mensaje llamo a clicked -->
    <!-- clicked escucha a emit y activa el método, el mensaje se guarda en una variable llamada  -->
    <Emit @clicked="mostrarMensaje"></Emit>
    <!-- <p>{{ msg }}</p> -->
    <Mensaje :msg="msg"></Mensaje>
    <Tarjeta @pagar=procesarPago></Tarjeta>
    <!--  -->
    <Status :resultado="status" ></Status>
  </div>
</template>

<script>
// 6. importamos
import Emit from "./components/emit.vue";
import Mensaje from "./components/Mensaje.vue";
import Tarjeta from "./components/Tarjeta.vue";
import Status from "./components/Status.vue";
export default {
  data() {
    return {
      input: "",
      // msg es una variable
      msg: "",
      status: "",
    };
  },
  // 7. llamamos al componente
  components: { Emit, Mensaje, Tarjeta, Status },

  // 2. Guardamos el método del botón
  methods: {
    buttonMethod() {
      console.log("CLICK");
    },

    // Guardamos el metodo de teclado con e
    teclado(e) {
      console.log(e);
    },

    // 10.Llamamos al metodo
    // 12. Apagamos o prendemos el mensaje
    mostrarMensaje(e) {
      if (e.show) {
        // guarda el mensaje e en la variable msg.
        this.msg = e.msg;
      } else {
        this.msg = "";
      }
    },

    procesarPago(e) {
      if (e.aceptado) {
        this.status = `Pago aceptado por la tarjeta numero ${e.numero}`;
      } else {
        this.status = `Pago rechazado por la tarjeta numero ${e.numero}`;
      }
    },
  },
};
</script>

<style>
a {
  display: block;
  text-decoration: none;
  color: #fff;
  background: #0000ff;
  width: 100px;
  text-align: center;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
