<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><i class="fas fa-headset"></i> Games Opinion</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              ><i class="fas fa-home"></i> Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/opiniones"
              ><i class="fas fa-comments"></i> Opiniones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">
              <i class="fas fa-users-cog"></i> Administracion</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
