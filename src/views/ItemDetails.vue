<template>
  <div v-if="item">
    <pre>{{ item }}</pre>
    <ItemSizeCard :size="item.size" />
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
