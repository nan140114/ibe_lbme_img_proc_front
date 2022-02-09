<template>
    <div class="gallery-top">
        <h2>Public Gallery</h2>
        <vs-row>
            <vs-col v-for="image in AllImages" :key="image.id" vs-type="flex" vs-justify="center" vs-align="center" w="2">
                <div class="img-container">
                        <img class="gallery-image"
                            v-bind:src="'https://storage.googleapis.com/dev-dev-ibe-lbme-img-proc-public-images-bucket/'+image.filename"
                        >
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        components: {
        },
        created: function() {
            this.loadImages();
        },
        methods: {
            ...mapActions([
                'loadImages'
            ])
        },
        computed: {
            ...mapGetters([
                'AllImages'
            ])
        }
    }
</script>
<style scoped>
    .gallery-top{
        margin-top: 8%;
    }
    .gallery-image {
        width: 80%;
        padding: 2em;
    }
</style>