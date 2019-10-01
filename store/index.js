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
            vuexContext.commit('setPosts', [
              {
                id: '1',
                thumbnail:
                  'https://www.fool.com.au/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg',
                title: 'Hello there!',
                previewText: 'This is my first post!'
              },
              {
                id: '2',
                thumbnail:
                  'https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg',
                title: 'Post title 2',
                previewText: 'This is second post!'
              },
              {
                id: '3',
                thumbnail:
                  'https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg',
                title: 'Post title 3',
                previewText: 'This is third post!'
              }
            ]);
            resolve();
          }, 1500);
        });
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
