<template>
  <div class="items-section">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        {
          id: "InHAn",
          itemName: "fits everybody high neck bodysuit",
          colorName: "grey",
          colorKey: ["grey"],
          size: "l",
          brand: "skims",
          mainCategory: "clothing",
          subCategories: ["bodysuit"],
          collections: ["basics"],
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-BODYSUIT-BS-BST-0232-GHP.jpg?v=1695340974",
          createdAt: 1733429469475,
          isDesigner: false,
        },
        {
          id: "2l5X4",
          itemName: "samba og shoes",
          colorName: "black",
          colorKey: ["black"],
          size: "37",
          brand: "adidas",
          mainCategory: "shoes",
          subCategories: ["sneakers"],
          collections: [],
          imageUrl:
            "https://assets.adidas.com/images/w_1880,f_auto,q_auto/d0561b42bd25442e9144a8bf0119046b_9366/B75807_09_standard.jpg",
          createdAt: 1733428449154,
          isDesigner: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.items-section {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-items: center;
  gap: 0.1rem;
}
</style>
