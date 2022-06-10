<template>
  <div class="item">
    <input type="checkbox" @change="updateStatus" :checked="item.completed" />

    <span :class="[item.completed ? 'completed' : '', 'item-name']">
      {{ item.name }}
    </span>

    <button @click="removeItem" class="delete-btn">
      <fa-icon icon="trash" />
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemList",
  props: ["item"],
  methods: {
    updateStatus() {
      axios
        .put(`api/item/${this.item.id}`, {
          ...this.item,
          completed: !this.item.completed,
        })
        .then((res) => {
          if (res.status === 200) this.$emit("item-changed", this.item);
        })
        .catch((err) => console.log(err));
    },
    removeItem() {
      axios
        .delete(`api/item/${this.item.id}`)
        .then((res) => {
          if (res.status === 200) this.$emit("item-changed", this.item);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: rgba(68, 68, 68, 0.6);
  backdrop-filter: blur(10px) saturate(200%);
}

.item-name {
  width: 100%;
  margin-left: 20px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

.delete-btn {
  background: #333;
  color: #af0000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
}

.delete-btn:hover {
  opacity: 0.8;
}
</style>