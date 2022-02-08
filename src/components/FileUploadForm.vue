<template>
  <div class="image-table container">
        <div class="large-12 medium-12 small-12 cell">
          <h1>Upload Image</h1>
          <label>File
            <input type="file" id="uploaded_file" ref="uploaded_file" v-on:change="onChangeFileUpload()" accept="image/*"/>
          </label>
            <vs-button flat v-on:click="submitForm()">Upload</vs-button>
        </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return {
        file: ''
      }
    },
    methods: {
      ...mapActions([
        'submitFile'
      ]),
      submitForm(){
          let formData = new FormData();
          formData.append('uploaded_file', this.file);
          console.log(formData.get("uploaded_file"))
          this.submitFile({formData: formData})
      },
      onChangeFileUpload(){
        this.file = this.$refs.uploaded_file.files[0];
      }
    }
  }
</script>