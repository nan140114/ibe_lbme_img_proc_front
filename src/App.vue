<template>
    <div class="center examplex">
      <vs-navbar  class="gray" center-collapsed>
        <template #left>
            <h1> IBE-LBME-IMG-PROC</h1>
        </template>
        <vs-navbar-item id="home">
            <vs-button 
                transparent size="xl">
            <router-link to="/" class="routerlink">Home</router-link>
            </vs-button>
        </vs-navbar-item>
        
        <vs-navbar-item  id="my-images">
            <vs-button size="xl"
                transparent>
            <router-link to="/my-images" class="routerlink">My Images</router-link>
            </vs-button>
        </vs-navbar-item>
        <vs-navbar-item id="upload-image">
            <vs-button
                transparent size="xl">
            <router-link to="/upload-images" class="routerlink">Upload Image</router-link>
            </vs-button>
        </vs-navbar-item>
        <vs-navbar-item>
          <vs-button flat gradient>
             User: {{UserId}}
          </vs-button>
        </vs-navbar-item>
        <template #right>
          <vs-input v-model="NewUserId" placeholder="Name" />
          <vs-button v-on:click="updateAndLogin()" >Login</vs-button>
        </template>
      </vs-navbar>
      <div id="hide-scroll-content" class="square">
        <div class="center grid">
            <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                <router-view/>
            </vs-col>
            </vs-row>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(["UserId"])
    },
    data(){
      return {
        file: '',
        NewUserId: ''
      }
    },
    methods: {
      ...mapActions([
        'Login'
      ]),
      updateAndLogin() {
        this.Login(this.NewUserId)
      }
    },
    watch: {}
  }
</script>

<style>
* {
    font-family: "Roboto Slab"; 
}
a:link, a:visited {
    color: blue;
}

a, u {
  text-decoration: none;
}
</style>
