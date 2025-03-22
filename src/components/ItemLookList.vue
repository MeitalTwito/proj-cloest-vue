<template>
  <ul class="item-look-book">
    <LookCard v-for="lookId in looks" :key="lookId" :lookId="lookId" />
  </ul>
</template>
<script>
import LookCard from "./LookCard.vue";
export default {
  name: "ItemLookList",
  components: {
    LookCard,
  },
  props: {
    looks: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.item-look-book {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
