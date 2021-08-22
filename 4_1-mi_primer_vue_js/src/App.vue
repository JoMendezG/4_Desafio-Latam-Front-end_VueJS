<template>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Run</th>
      <th scope="col">Nacimiento</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
   <tr v-for="(persona, $index) of personas" :key="$index">
      <td>{{$index}}</td>
      <td>{{persona.nombre}}</td>
      <td>{{persona.apellido}}</td>
      <td>{{persona.rut}}</td>
      <td>{{persona.edad}}</td>
      <td>{{persona.fechaNacimiento}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    personas: [
      {
        nombre: "Josefa", 
        apellido: "Méndez", 
        rut:"12.345.678-9", 
        edad: 24, 
        fechaNacimiento: "01-01-1997",
      },
      {
        nombre: "Josefa", 
        apellido: "Méndez", 
        rut:"12.345.678-9", 
        edad: 24, 
        fechaNacimiento: "01-01-1997",
      },
      {
        nombre: "Josefa", 
        apellido: "Méndez", 
        rut:"12.345.678-9", 
        edad: 24, 
        fechaNacimiento: "01-01-1997",
      },
      {
        nombre: "Josefa", 
        apellido: "Méndez", 
        rut:"12.345.678-9", 
        edad: 24, 
        fechaNacimiento: "01-01-1997",
      },
    ]
  })
}
</script>

<style>

</style>
