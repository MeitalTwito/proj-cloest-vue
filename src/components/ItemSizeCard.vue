<template>
  <pre>{{ size }}</pre>
</template>

<script>
export default {
  name: "ItemSizeCard",
  props: {
    size: {
      type: Object,
      required: true,
    },
  },
};
</script>
