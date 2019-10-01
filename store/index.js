import Vuex from 'vuex';
import axios from 'axios';

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
        return axios
          .get('https://nuxt-blog-e9a13.firebaseio.com/posts.json')
          .then(res => {
            const posts = [];
            for (const key in res.data) {
              posts.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('setPosts', posts);
          })
          .catch(e => context.error(e));
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts);
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
