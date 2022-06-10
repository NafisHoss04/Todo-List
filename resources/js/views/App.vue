<template>
  <div class="container">
    <div class="heading">
      <h2 id="title">Todo List</h2>
      <add-item-form @reload-list="getItems" />
    </div>

    <list-view :items="items" @reload-list="getItems" />
  </div>
</template>

<script>
import AddItemForm from "../components/AddItemForm.vue";
import ListView from "../components/ListView.vue";

export default {
  name: "App",
  components: {
    AddItemForm,
    ListView,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get("api/items")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.container {
  width: 450px;
  margin: auto;
}

.heading {
  margin: 20px 0;
  padding: 10px 15px;
  border-radius: 5px;
  background: rgba(68, 68, 68, 0.6);
  backdrop-filter: blur(10px) saturate(200%);
}

.heading h2 {
  margin: 0;
  font-weight: 500;
  margin: 5px 0;
  text-align: center;
  color: #fff;
}
</style>