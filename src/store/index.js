import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//const baseURL = "https://dev-api-gateway-bh7oe6z6.uc.gateway.dev"
const baseURL = "http://localhost:8080"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    userImages: [],
    activeUser: "1233",
    setHttpResponse: ""
  },
  mutations: {
      setImages: (state, images) => {
          state.images = images
      },
      setImagesByUser: (state, images) => {
        state.userImages = images
      },
      setFormResponse: (state, response) => {
          state.formResponse = response
      }
  },
  actions: {
    makeImagePublic: ({commit}, image_id) => {
        axios.post(`${baseURL}/images/${image_id}/publish`)
        .then(function(response){
            commit('setFormResponse', response.data)
        })
        .catch(function(error){
            console.log(error);
        });
    },
    loadImages: ({commit}) => {
        axios.get(`${baseURL}/images`)
        .then((response) => {
            commit('setImages', response.data)
        })
    },
    loadImagesByUser: ({commit}) => {
        console.log()
      axios.get(`${baseURL}/images/user/1233`)
          .then((response) => {
              commit('setImagesByUser', response.data)
          })
    },
    submitFile: ({commit}, payload) => {
      console.log(payload.formData.get("uploaded_file"))
      axios.post(`${baseURL}/images?user_id=1233`, payload.formData, {
          headers: {'Content-Type': 'multipart/form-data'}
      }
      ).then(function(response){
          commit('setFormResponse', response.data)
      })
      .catch(function(error){
          console.log(error);
      });
    }
  },
  modules: {
  },
  getters: {
    AllImages: state => {
      return state.images.map(x => x)
    },
    UserImages: state => {
        return state.userImages.map(x => x)
    },
  }
})
