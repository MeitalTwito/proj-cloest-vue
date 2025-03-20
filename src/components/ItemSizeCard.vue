<template>
  <div class="sizing-guide" v-if="sizingGuide">
    <h3>Size Guide</h3>
    <ul>
      <li v-for="(size, guide) in sizingGuide" :key="guide">
        <p>{{ guide }}</p>
        <p class="sizing-number">{{ size }}</p>
      </li>
    </ul>
  </div>

  <div class="measurements" v-if="measurements">
    <h3>body measurements</h3>
    <div v-for="(measurementsData, system) in measurements" :key="system">
      <h4>{{ system }}</h4>
      <ul>
        <li v-for="(measurement, bodyPart) in measurementsData" :key="bodyPart">
          <p>{{ bodyPart }}</p>
          <p class="sizing-number">{{ measurement }}</p>
        </li>
      </ul>
    </div>
  </div>
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
      sizingGuide: null,
      measurements: null,
    };
  },
  created() {
    const { sizingSystem, size } = this.size;
    sizeChartService
      .getSize(sizingSystem, size)
      .then((response) => {
        const { sizingGuide, measurements } = response;
        this.sizingGuide = sizingGuide;
        this.measurements = measurements;
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
</script>

<style scoped>
.sizing-guide,
.measurements {
  text-transform: uppercase;
}
.measurements li,
.sizing-guide li {
  text-align: center;
}
.sizing-number {
  font-size: 3rem;
  font-weight: 600;
}

.sizing-guide ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.sizing-guide li {
  border: 1px solid black;
  padding: 1rem;
}
.measurements {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.measurements ul {
  border: 1px solid black;
}
.measurements h3 {
  grid-column: 1/-1;
}
.measurements h4 {
  background-color: black;
  padding: 0.5rem;
  color: white;
}
</style>
