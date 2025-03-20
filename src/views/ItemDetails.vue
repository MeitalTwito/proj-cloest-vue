<template>
  <pre v-if="item">{{ item }}</pre>
</template>

<script>
import ItemsService from "@/services/ItemsService";

export default {
  props: ["id"],
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
