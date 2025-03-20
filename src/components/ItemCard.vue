<template>
  <article class="item-card" id="${item.id}">
    <header class="item-header">
      <div class="item-img-box">
        <img class="item-img" :src="item.imageUrl" alt="" />
      </div>
      <p class="item-name">{{ item.itemName }}</p>
    </header>
    <div class="item-details">
      <p class="item-brand">
        {{ item.brand }}
        <span v-if="item.isDesigner" class="designer">designer</span>
      </p>
      <p class="item-color">{{ item.colorName }}</p>
      <p class="item-size">Size: {{ item.size }}</p>
    </div>
    <RouterLink :to="{ name: 'ItemDetails', params: { id: item.id } }">
      <button class="item-update">item details</button>
    </RouterLink>
  </article>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  outline: 1px solid black;
  position: relative;
}
.item-header {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.item-img-box {
  width: 100%;
  aspect-ratio: 3/4;
  margin-bottom: 1rem;
  overflow: hidden;
  border-bottom: 1px solid;
}
.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}
.item-size,
.item-name,
.item-brand,
.item-color {
  text-transform: uppercase;
  padding: 0 1rem;
}
.item-brand,
.item-name {
  font-size: 1rem;
  letter-spacing: 0.8px;
}
.item-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100vw / 4);
}
.designer {
  background-color: #000;
  font-size: 0.9rem;
  color: #fff;
  padding: 0 0.3rem;
}

.item-update {
  width: 100%;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: none;
  border-top: 1px solid black;
  font-size: 1.2rem;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: all 0.5s;
}

.item-update:hover {
  background-color: black;
  color: #fff;
}
</style>
