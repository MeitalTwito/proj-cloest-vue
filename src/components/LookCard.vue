<template>
  <li v-if="look" class="look-book-card">
    <div class="look-book-img-box">
      <div
        class="icon-box icon-next"
        @click="nextPic"
        v-if="imgIdx < getLastImgIdx"
      >
        <FontAwesomeIcon :icon="['fas', 'circle-chevron-right']" />
      </div>
      <img
        class="look-book-img"
        :src="look.imageUrls[imgIdx]"
        alt=""
        srcset=""
      />
      <div class="icon-box icon-prev" @click="prevPic" v-if="imgIdx > 0">
        <FontAwesomeIcon :icon="['fas', 'circle-chevron-left']" />
      </div>
    </div>
    <p>{{ getDate }}</p>
    <p>{{ look.location.locationName }}</p>
    <!-- <pre>{{ look }}</pre> -->
  </li>
</template>

<script>
import LookBookService from "@/services/LookBookService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleChevronLeft, faCircleChevronRight);

export default {
  name: "LookCard",
  props: {
    lookId: {
      type: String,
      required: true,
    },
  },
  components: { FontAwesomeIcon },
  data() {
    return {
      look: null,
      imgIdx: 0,
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
  methods: {
    nextPic() {
      this.imgIdx++;
    },
    prevPic() {
      this.imgIdx--;
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.look.date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      return formattedDate;
    },
    getLastImgIdx() {
      return this.look.imageUrls.length - 1;
    },
  },
};
</script>
<style scoped>
.look-book-card {
  max-width: 30rem;
  border: 1px solid #eee;
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;
}
.look-book-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
.icon-box {
  position: absolute;
  color: #fff;
  opacity: 50%;
  font-size: 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}
.icon-next {
  right: 5px;
}
.icon-prev {
  left: 5px;
}

.look-book-img-box {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-bottom: 1px solid;
  position: relative;
}
.look-book-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
