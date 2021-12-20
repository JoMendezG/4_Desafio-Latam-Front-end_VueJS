# 4_5-poke-guia

## Descripción

Desarrollaremos una pequeña pokeguía que nos permitirá buscar un pokémon.

Al hacer ésto, la página deberá desplegar una foto de dicho pokémon, junto con una lista de movimientos y habilidades, como se muestra en la siguiente imagen:

[img1]: ./src/assets/img/readme.jpg

Para realizar ésto, haremos uso de la PokéAPI, la cual consumiremos con el método integrado fetch de Javascript, mediante la siguiente URL:

[https://pokeapi.co/api/v2/pokemon/nombre_pokemon]

Donde, `nombre_pokemon` será el nombre del pokemon que deseamos buscar

Como requisito, se pide que al momento de acceder a la página, carguemos automáticamente al pokémon `pikachu`.

Para llevar a cabo lo anterior, deberá hacer uso del hook `created`, el cual deberá ejecutar un method que usted defina para cargar los datos de la API. Los movimientos, habilidades y la foto del pokémon, deberán ser accesados a través de `computed properties`.

## Requeriminetos

1. Crear un proyecto Vue.js.

1. Desarrollar el método que consuma la PokéAPI y obtenga los datos de un pokémon.

1. Desarrollar las computed properties para la foto del pokemon, los movimientos y
   habilidades.

1. Desarrollar la interfaz de usuario, con el botón de búsqueda, el despliegue de la foto del pokémon, la lista de movimientos y la lista de habilidades.
