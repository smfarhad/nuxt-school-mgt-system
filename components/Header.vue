<template>
  <div>
    <transition v-if="showModal" name="modal" fade>
      <div class="modal-mask w3-container">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <form role="form" class="form-horizontal" @submit.prevent="checkForm">
                <div class="form-group">
                  <div class="col-sm-12">
                    <input class="form-control" id="email1" placeholder="Name" type="text" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12">
                    <input
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-10">
                    <button
                      type="submit"
                      class="btn btn-light btn-radius btn-brd grd1 w3-center w3-animate-top"
                    >Submit</button>
                    <button class="btn btn-success" type="submit" @click>Login</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <span class="btn btn-danger" @click="showModal = false">Close</span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>

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
              <li class="nav-item" @click="getParams" :class="{ active: $route.name == 'home'}">
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
                  <nuxt-link class="dropdown-item" to="/admin/blog">Admin</nuxt-link>
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
                  <span @click="showModal = true">Login</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      isActive: false
    };
  },
  methods: {
    getParams(routeName) {
      if (this.$route.name == routeName) {
        return true;
      }
      return false;
    },
    checkForm() {
      this.$axios
        .$post(authUrl, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
    }
  }
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>