<template>
  <div class="add-item">
    <input type="text" v-model="name" />

    <fa-icon
      icon="plus"
      @click="addItem"
      :class="[name ? 'active' : 'inactive']"
    />
  </div>
</template>

<script>
export default {
  name: "AddItemForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addItem() {
      if (!this.name) return;

      axios
        .post("api/item/store", {
          name: this.name,
        })
        .then((res) => {
          if (res.status === 201) this.name = "";
          this.$emit("reload-list", this.name);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.add-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.add-item input {
  border: none;
  outline: none;
  color: white;
  background: #555;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 3px;
}

.add-item .svg-inline--fa {
  cursor: pointer;
  border-radius: 3px;
  background: #222;
  padding: 7px;
  transition: all 0.2s;
}

.add-item .svg-inline--fa:hover {
  opacity: 0.8;
}

.inactive {
  opacity: 0.5;
}

.add-item .svg-inline--fa.inactive {
  cursor: not-allowed;
  opacity: 0.5;
}

.active {
  opacity: 1;
}
</style>