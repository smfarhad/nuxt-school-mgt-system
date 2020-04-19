<template>
  <header class="top-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container fluid">
        <nuxt-link class="navbar-brand" to="/">
          <img src="/images/logo.png" alt />
        </nuxt-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars-host"
          aria-controls="navbars-rs-food"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars-host">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" @click="getParams" :class="{ active: getParams('home')}">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item" @click="getParams" :class="{ active: $route.name == 'about'}">
              <nuxt-link class="nav-link" to="/about">About Us</nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link
                class="nav-link dropdown-toggle"
                to="#"
                id="dropdown-a"
                data-toggle="dropdown"
              >Course</nuxt-link>
              <div class="dropdown-menu" aria-labelledby="dropdown-a">
                <nuxt-link class="dropdown-item" to="/">Course Grid 2</nuxt-link>
                <nuxt-link class="dropdown-item" to="/">Course Grid 3</nuxt-link>
                <nuxt-link class="dropdown-item" to="/">Course Grid 4</nuxt-link>
              </div>
            </li>
            <li class="nav-item" @click="getParams" :class="{ active: $route.name == 'blog'}">
              <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Teachers</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Pricing</nuxt-link>
            </li>
            <li class="nav-item" @click="getParams" :class="{ active: $route.name == 'contact'}">
              <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <nuxt-link
                class="hover-btn-new log orange"
                to="#"
                data-toggle="modal"
                data-target="#login"
              >
                <span>Book Now</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    getParams(routeName) {
      if (this.$route.name == routeName) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style></style>