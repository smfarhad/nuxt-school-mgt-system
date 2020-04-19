import Vuex from 'vuex';
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [{
                id: 1,
                name: "First Post",
                thumb: "/images/blog_1.jpg",
                description: "First Post description"
              },
              {
                id: 2,
                name: "Second Post",
                thumb: "/images/blog_2.jpg",
                description: "Second Post description"
              }
            ]);
            resolve();
          }, 1000);
          //reject(new Error());
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};
export default createStore;
