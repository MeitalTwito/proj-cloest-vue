<template>
  <h2 class="secondary-heading">Look Book</h2>
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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
}
.secondary-heading {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
