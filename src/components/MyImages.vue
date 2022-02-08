<template>
<div class="image-table">
    <div class="center grid">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                <vs-button v-on:click="publishImage()" flat :active="selected!=null" >Make Public</vs-button>
            </vs-col>
        </vs-row>
    </div>
  <vs-table v-model="selected">
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
        <span class="data">
        <pre>
  {{ selected ? selected : 'Select an item in the table' }}
        </pre>
      </span>
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
                'UserImages'
            ])
        }
    }
</script>
<style>
.image-table {
    margin-top: 100px;
}
</style>