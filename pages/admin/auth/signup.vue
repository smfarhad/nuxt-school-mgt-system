<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h4>Sign Up</h4>
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
        <!-- <div class="form-group input-group-sm">
          <input
            v-model="confirm_password"
            type="password"
            class="form-control is-invalid"
            id="password"
            placeholder="Confirm Password"
          />
          <div class="invalid-feedback"></div>
        </div>-->
        <div class="row">
          <div class="col-sm-12">
            <nuxt-link class="link" to="/admin/auth">Go to login page</nuxt-link>
            <button
              type="submit"
              class="btn btn-primary float-right btn-sm"
              :disabled="confirmPassword"
            >Sign Up</button>
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
      confirm_password: "",
      error: "",
      confirm_password_error: ""
    };
  },
  computed: {
    confirmPassword() {
      if (this.password === this.confirm_password) {
        this.isLogin = true;
        this.confirm_password_error = "";
        return true;
      } else {
        this.confirm_password_error = "Password must be matched!";
        this.isLogin = false;
        return false;
      }
    }
  },
  methods: {
    checkForm() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push("/admin");
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
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
</style>

