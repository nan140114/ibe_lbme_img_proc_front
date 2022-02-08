<template>
    <div class="center examplex">
      <vs-navbar center-collapsed>
        <template #left>
        <vs-button
        dark
        >
          IBE-LBME-IMG-PROC
        </vs-button>
        </template>
        <vs-navbar-item id="home">
            <vs-button
                transparent size="l">
            <router-link to="/">
                Home
            </router-link>
            </vs-button>
        </vs-navbar-item>
        
        <vs-navbar-item  id="my-images">
            <vs-button size="l"
                transparent>
            <router-link to="/my-images">My Images</router-link>
            </vs-button>
        </vs-navbar-item>
        <vs-navbar-item id="upload-image">
            <vs-button
                transparent size="l">
            <router-link to="/upload-images">Upload Image</router-link>
            </vs-button>
        </vs-navbar-item>
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
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
<style>
#app {
    font-family: "RobotoSlabLight";
    font-family: "Roboto Slab"; 
}
a:link, a:visited {
    color: blue;
}

a, u {
  text-decoration: none;
}
</style>
