<template>
  <div>
    <!-- 5. Integramos nuestro botón y lo llamamos en el app -->
    <a href="#" @click.prevent="buttonMethod">Click me!</a>
  </div>
</template>

<script>
export default {
  data() {
    // Hacemos que siempre el mensaje sea verdadero
    return {
      show: true,
    };
  },
  methods: {
    buttonMethod() {
      // hacemos el contrario del mensaje prender o apagar.
      this.show = !this.show;
      //   this.$emit es una función propia de vue. Toma un argumento. Cuando hago click al botón llamo al evento clicket para hacer algo con este y argumento que es la data
      this.$emit("clicked", {
        //   11. Mostramos la data o mensaje
        // show: true,
        show: this.show,
        msg: "Desafio latam",
      });
    },
  },
};
</script>

<style></style>
