<template>
  <li v-if="look">
    <img :src="look.imageUrls[0]" alt="" srcset="" />
  </li>
  <pre>{{ look }}</pre>
</template>

<script>
import LookBookService from "@/services/LookBookService";

export default {
  name: "LookCard",
  props: {
    lookId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      look: null,
    };
  },
  created() {
    LookBookService.getLook(this.lookId)
      .then((response) => {
        this.look = response.data;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>
