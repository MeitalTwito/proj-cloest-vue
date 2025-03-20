<template>
  <div class="items-section">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import ItemsService from "@/services/ItemsService.js";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: null,
    };
  },
  created() {
    ItemsService.getItems()
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>

<style scoped>
.items-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 0.1rem;
}
</style>
