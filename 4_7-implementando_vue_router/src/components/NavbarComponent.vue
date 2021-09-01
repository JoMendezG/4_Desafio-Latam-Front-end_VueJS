<template>
  <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div class="container">
      <router-link :to="{ name: 'Portada' }" class="navbar-brand">
        V8
      </router-link>
      <button
        data-toggle="collapse"
        data-target="#navbarResponsive"
        class="navbar-toggler"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <!-- MENU DE NAVEGACION -->
        <ul class="nav navbar-nav ml-auto" id="menu-v8">
          <li class="nav-item" role="presentation">
            <router-link :to="{ name: 'Portada' }"> Portada </router-link>
          </li>
          <li class="nav-item" role="presentation">
            <router-link :to="{ name: 'SobreMi' }"> Sobre mí</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <router-link :to="{ name: 'Contacto' }"> Contacto</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
            <a href="/post/1">último post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: " NavbarComponent",
};
</script>

<style></style>
