<template>
  <div>
    <h1>Blog Posts</h1>
    <v-data-table :headers="headers" :items="loadedPosts" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>All Posts Data</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="editedItem.name" label="Post Title"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.thumb="{ item }">
        <img class="thumb" :src="item.thumb" alt="item.title" />
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn x-small class="ma-1" fab outlined color="warning" @click="editItem(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn x-small fab outlined color="red" @click="deleteItem(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
    //  console.log("Vuex Tests:" + this.$store.getters.loadedPosts);
  },
  data() {
    return {
      dialog: false,
      headers: [
        { text: "ID", align: "start", sortable: false, value: "id" },
        { text: "Image", sortable: false, value: "thumb" },
        { text: "Title", value: "name" },
        { text: "Descripton", value: "description" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        thumb: "",
        description: ""
      },
      defaultItem: {
        id: "",
        name: "",
        thumb: "",
        description: ""
      }
    };
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: 1,
          name: "First Post",
          thumb: "/images/blog_1.jpg",
          description: "First Post description"
        },
        {
          id: 2,
          name: "Second Post",
          thumb: `/images/blog_1.jpg`,
          description: "Second Post description"
        }
      ];
      return this.desserts;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  },
  layout: "Admin"
};
</script>
<style scoped>
.thumb {
  width: 70px;
  height: 70px;
  margin: 5px;
  border-radius: 10px;
  border: 2px solid #ccc;
}
/* .v-application .elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0),
    0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;
} */
</style>