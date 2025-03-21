<template>
  <div v-if="item">
    <section class="item container">
      <div class="item-img-box">
        <img class="item-img" :src="item.imageUrl" alt="" />
      </div>
      <div class="item-details">
        <div v-if="item.isDesigner" class="item-designer">designer</div>
        <p class="item-details-brand">{{ item.brand }}</p>
        <p class="item-details-name">{{ item.itemName }}</p>
        <ul class="item-colors">
          <li
            v-for="(color, index) in item.colorKey"
            :key="index"
            class="item-details-color"
          >
            <span>{{ color }}</span>
            <div class="color-box" :style="getColor(color, index)"></div>
          </li>
        </ul>
        <ItemSizeCard :size="item.size" />
      </div>
    </section>
    <!-- <pre>{{ item }}</pre> -->
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
      colors: {
        beige: "#e6d4ab",
        black: "#000",
        blue: "#6f9dc5",
        brown: "#7d5b41",
        green: "#669960",
        grey: "#c3c1c1",
        khaki: "#b39969",
        orange: "#b45f06",
        navy: "#000080",
        metallic:
          "linear-gradient(45deg, rgb(92.9% 92.9% 92.9%), rgb(74.1% 74.1% 74.1%))",
        pink: "#ecacac",
        purple: "#a184af",
        red: "#800020",
        white: "#fff",
        yellow: "#ecd76d",
      },
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
  methods: {
    getColor(color) {
      const colorCss = this.colors[color];
      if (color === "metallic") return { backgroundImage: colorCss };
      return { backgroundColor: colorCss };
    },
  },
};
</script>
<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 3rem;
  text-transform: uppercase;
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
.item-details-brand {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.item-details-name {
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.item-colors {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.item-details-color span {
  text-transform: capitalize;
  font-size: 1.2rem;
  display: inline-block;
  margin-bottom: 0.5rem;
}
.color-box {
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
}
.color-box:hover {
  outline: 1px solid black;
  border: 3px solid white;
  cursor: pointer;
}
pre {
  font-size: 1rem;
}
</style>
