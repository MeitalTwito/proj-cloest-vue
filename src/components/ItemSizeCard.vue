<template>
  <pre v-if="sizeDetails">{{ sizeDetails }}</pre>
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
    data() {
      return {
        sizeDetails: null,
      };
    },
  },
  created() {
    sizeChartService
      .getSize("us", "10")
      .then((response) => {
        this.sizeDetails = response;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>
