<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h4>Login</h4>
      <div class="error">{{error}}</div>
      <form role="form" class="form-horizontal" @submit.prevent="checkForm">
        <div class="form-group input-group-sm">
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email "
            v-model="email"
          />
        </div>
        <div class="form-group input-group-sm">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="row">
          <div class="col-sm-12">
            <nuxt-link class="link" to="/admin/auth/signup">New User Register here</nuxt-link>
            <button type="submit" class="btn btn-primary float-right btn-sm">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Your web app's Firebase configuration
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      error: "",
      user: ""
    };
  },
  methods: {
    checkForm() {
      this.$store
        .dispatch("authenticatedUser", {
          isLogin: true,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>

<style>
.admin-auth-page {
  padding: 20px;
}
.error {
  color: red;
  font-size: 12px;
  font-family: "Courier New", Courier, monospace;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
.link {
  color: green;
  text-decoration: underline;
  font-size: 10px;
  font-style: oblique;
}
</style>

