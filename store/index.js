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
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        state.loadedPosts = state.loadedPosts.map(post =>
          post.id === editedPost.id ? editedPost : post
        );
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
        axios
          .put(
            `https://nuxt-blog-e9a13.firebaseio.com/posts/${id}.json`,
            editPost
          )
          .then(() => this.$router.push('/admin'))
          .catch(e => context.error(e));
        commit('setPosts', posts);
      },

      addPost({ commit }, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return axios
          .post(
            `https://nuxt-blog-e9a13.firebaseio.com/posts.json`,
            createdPost
          )
          .then(res => {
            console.log(res.data);
            commit('addPost', { ...createdPost, id: res.data.name });
          })
          .catch(e => context.error(e));
      },

      editPost({ commit }, editedPost) {
        return axios
          .put(
            `https://nuxt-blog-e9a13.firebaseio.com/posts/${editedPost.id}.json`,
            editedPost
          )
          .then(() => {
            commit('editPost', editedPost);
          });
      }
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      getPostById: state => id => {
        return state.loadedPosts.find(post => post.id === id);
      }
    }
  });
};

export default createStore;
