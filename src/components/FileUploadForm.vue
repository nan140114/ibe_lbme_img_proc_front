<template>
  <div class="form-top">
    <vs-row>
        <vs-col offset="5" w="8">
            <div>
                <h2>Upload Image</h2>
                <input type="file" id="uploaded_file" ref="uploaded_file" v-on:change="onChangeFileUpload()" accept="image/*"/>
                <vs-button flat gradient v-on:click="submitForm()">Upload</vs-button>
            </div>
        </vs-col>
    </vs-row>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
        ...mapGetters(["ResponseDetails"])
    },
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
    },
    watch: {
        ResponseDetails: {
            deep: true,
            handler(message) {
                console.log(message)
                this.$vs.notification({
                        color: "dark",
                        position: 'top-center',
                        title: "Server Response",
                        text: message
                })
            }
        }
    }
  }
</script>
<style scoped>
.form-top {
    margin-top: 10%;
}
</style>