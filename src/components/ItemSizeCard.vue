<template>
  <pre>{{ sizeDetails }}</pre>
</template>

<script>
import sizeChartService from "@/services/sizeChartService";
export default {
  name: "ItemSizeCard",
  props: {
    size: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sizeDetails: null,
    };
  },
  created() {
    sizeChartService
      .getSize(this.size.sizingSystem, this.size.size)
      .then((response) => {
        this.sizeDetails = response;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>
