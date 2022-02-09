<template>
<div class="my-images-top">
    <h2>My Images</h2>
    <div class="center grid">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                <vs-button gradient v-on:click="publishImage()" flat :active="selected!=null" >Make Public</vs-button>
                <vs-button gradient v-on:click="reload()" flat >Reload</vs-button>
            </vs-col>
        </vs-row>
    </div>
  <vs-table striped v-model="selected">
    <template #thead>
      <vs-tr>
        <vs-th>
          Name
        </vs-th>
        <vs-th>
          Width
        </vs-th>
        <vs-th>
          Heigth
        </vs-th>
        <vs-th>
          Size (Bytes)
        </vs-th>
        <vs-th>
            Is Valid?
        </vs-th>
        <vs-th>
          Id
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        v-for="(tr, i) in UserImages"
        :data="tr"
        :is-selected="selected == tr"
      >
        <vs-td>
          {{ tr.original_filename }}
        </vs-td>
        <vs-td>
         {{ tr.width }}
        </vs-td>
        <vs-td>
         {{ tr.heigth }}
        </vs-td>
        <vs-td>
         {{ tr.size }}
        </vs-td>
        <vs-td>
         {{ tr.valid }}
        </vs-td>
        <vs-td>
         {{ tr.id }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data:() => ({
            selected: null
        }),
        components: {
        },
        created: function() {
            this.loadImagesByUser();
        },
        methods: {
            reload(){
                this.loadImagesByUser();
            },
            publishImage(){
                console.log(this.selected.id)
                this.makeImagePublic(this.selected.id)
            },
            ...mapActions([
                'loadImagesByUser',
                'makeImagePublic'
            ])
        },
        computed: {
            ...mapGetters([
                'UserImages',
                'UserId',
                "ResponseDetails"
            ])
        },
        watch: {
            'UserId': function () {
                this.loadImagesByUser();
             },
            'ResponseDetails': {
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
<style>
.my-images-top {
    margin-top: 5%;
}
</style>