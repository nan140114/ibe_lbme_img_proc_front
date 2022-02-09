import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//const baseURL = "https://dev-api-gateway-bh7oe6z6.uc.gateway.dev"
const baseURL = process.env.VUE_APP_BASE_URL //"http://localhost:8080"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    userImages: [],
    activeUser: "123",
    response_details: ""
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
      },
      setResponseDetails: (state, response) => {
        state.response_details = response
      },
      setActiveUser: (state, user_id) => {
          state.activeUser = user_id
      }
  },
  actions: {
    Login: ({commit}, user_id) => {
        console.log(user_id)
        commit("setActiveUser", user_id)
    },
    makeImagePublic: ({commit}, image_id) => {
        axios.post(`${baseURL}/images/${image_id}/publish`)
        .then(function(response){
            commit('setResponseDetails', `All Good Image is  Public ! ${response.data.details}`)
        })
        .catch(function(error){
            commit('setResponseDetails', `Error  ${error.response.data.detail}`)
        });
    },
    loadImages: ({commit}) => {
        axios.get(`${baseURL}/images`)
        .then((response) => {
            commit('setImages', response.data)
        })
    },
    loadImagesByUser: ({commit, state}) => {
      axios.get(`${baseURL}/images/user/${state.activeUser}`)
          .then((response) => {
              commit('setImagesByUser', response.data)
          })
    },
    submitFile: ({commit, state}, payload) => {
      console.log(payload.formData.get("uploaded_file"))
      axios.post(`${baseURL}/images?user_id=${state.activeUser}`, payload.formData, {
          headers: {'Content-Type': 'multipart/form-data'}
      }
      ).then(function(response){
        commit('setResponseDetails', `All Good ! ${response.data.details}`)
      })
      .catch(function(error){
        commit('setResponseDetails', `Error  ${error.response.data.detail}`)
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
    ResponseDetails: state => {
        return state.response_details
    },
    UserId: state => {
        return state.activeUser
    },
  }
})
