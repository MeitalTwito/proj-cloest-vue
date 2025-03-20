<template>
  <div v-if="item">
    <section class="item container">
      <div class="item-img-box">
        <img class="item-img" :src="item.imageUrl" alt="" />
      </div>
      <div class="item-details">
        <div v-if="item.isDesigner" class="item-designer">designer</div>
        <p class="item-details-brand">
          {{ item.brand }}
        </p>
        <p class="item-details-name">{{ item.itemName }}</p>
        <p class="item-details-color">{{ item.colorName }}</p>
        <ItemSizeCard :size="item.size" />
      </div>
    </section>
    <pre>{{ item }}</pre>
  </div>
</template>

<script>
import ItemsService from "@/services/ItemsService";
import ItemSizeCard from "@/components/ItemSizeCard.vue";

export default {
  props: ["id"],
  components: {
    ItemSizeCard,
  },
  data() {
    return {
      item: null,
    };
  },
  created() {
    ItemsService.getItem(this.id)
      .then((response) => {
        this.item = response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>
<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.item-img-box {
  width: 100%;
  aspect-ratio: 3/4;
  margin-bottom: 1rem;
  overflow: hidden;
}
.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
pre {
  font-size: 2rem;
}
</style>
