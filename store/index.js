import Vuex from 'vuex';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookie from 'js-cookie'


const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/blog-posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({
                ...data[key],
                id: key
              });
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => context.error(e));
      },

      addPost(vuexContext, posts) {
        const createdPost = {
          ...posts,
          created_at: new Date()
        };

        return this.$axios
          .$post(process.env.baseUrl + "/blog-posts.json?auth=" + vuexContext.state.token, createdPost)
          .then(data => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: data.name
            });
          }).catch(e => console.log(e));

      },
      editPost(vuexContext, editdPosts) {
        return this.$axios
          .$put(
            process.env.baseUrl + "/blog-posts/" +
            editdPosts.id + "/.json?auth=" + vuexContext.state.token, editdPosts

          )
          .then(result => {
            vuexContext.commit('editPost', editdPosts);
            //vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000);
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);

      },
      authenticatedUser(vuexContext, authData) {
        let token;
        let expirationDate;
        return firebase.auth()
          .signInWithEmailAndPassword(authData.email, authData.password)
          .then(result => {
            token = result.user.xa;
            expirationDate = new Date().getTime() + 3600 * 1000;
            vuexContext.commit("setToken", token);
            localStorage.setItem("token", token);
            localStorage.setItem("tokenExpiration", expirationDate);

            Cookie.set('jwt', token);
            Cookie.set('exprirationDate', expirationDate);

            return this.$axios.$post('http://localhost:3000/api/track-data', {
              data: 'Authenticated!'
            })


            //vuexContext.dispatch('setLogoutTimer', 3600 * 1000)
          })
          .catch(error => {
            this.error = error;
          });

      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie.split(";").find(c => c.trim().startsWith("exprirationDate=")).split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch('logout');
          return;
        }

        // vuexContext.dispatch('setLogoutTimer', expirationDate - new Date().getTime());
        vuexContext.commit('setToken', token);
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('exprirationDate');
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }

      }
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {

        console.log(state.token != null);
        return state.token != null;
      }
    },

  });
};
export default createStore;
