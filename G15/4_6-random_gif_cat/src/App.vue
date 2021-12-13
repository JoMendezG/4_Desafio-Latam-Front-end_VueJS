<template>
  <div class="body">
    <h1>Random Gif Cat</h1>

    <div class="formulario">
      <div class="fila">
        <div class="izquierda">
          <label for="">Titulo</label>
        </div>
        <div class="derecha">
          <input type="text" />
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Filtro</label>
        </div>
        <div class="derecha">
          <select name="" id="">
            <option value="filtro 1">Filtro 1</option>
          </select>
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Color</label>
        </div>
        <div class="derecha">
          <select name="" id="">
            <option value="Rojo">Rojo</option>
          </select>
        </div>
      </div>
      <div class="fila">
        <div class="izquierda">
          <label for="">Tamaño</label>
        </div>
        <div class="derecha">
          <input type="text" />
        </div>
      </div>
    </div>

    <button>Obtener mi gatito</button>
  </div>
</template>

<script>
export default {};
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
  width: 20%;
}

.derecha {
  width: 80%;
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
}
</style>
