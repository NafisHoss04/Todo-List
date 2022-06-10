<template>
  <div>
    <div v-for="(item, i) in items" :key="i">
      <item-list
        :item="item"
        @item-changed="$emit('reload-list')"
        class="item"
      />
    </div>
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";

export default {
  name: "ListView",
  props: ["items"],
  emits: ["reload-list"],
  components: {
    ItemList,
  },
};
</script>

<style scoped>
.item {
  background: #333;
}
</style>