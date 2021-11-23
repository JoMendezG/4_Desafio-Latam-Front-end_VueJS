<template>
  <div id="app">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">RUN</th>
          <th scope="col">Nacimiento</th>
          <th scope="col">Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Jose</td>
          <td>Pérez</td>
          <td>12.345.678-9</td>
          <td>12-04-67</td>
          <td>52</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>María</td>
          <td>Rodríguez</td>
          <td>6.543.219-2</td>
          <td>30-11-90</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Manuel</td>
          <td>Patiño</td>
          <td>12.223.345-6</td>
          <td>02-12-59</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
