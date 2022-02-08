<template>
        <div class="image-table center grid">
            <vs-row>
                <vs-col v-for="image in AllImages" :key="image.id" vs-type="flex" vs-justify="center" vs-align="center" w="3">
                    <vs-card>
                        <template #img>
                            <img 
                                v-bind:src="'https://storage.googleapis.com/dev-dev-ibe-lbme-img-proc-public-images-bucket/'+image.filename"
                            >
                        </template>
                    </vs-card>
                    
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
