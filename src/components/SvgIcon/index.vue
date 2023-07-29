<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  width: {
    type: String,
    default: '20px',
  },
  height: {
    type: String,
    default: '20px',
  },
  color: {
    type: String,
    default: 'red',
  },
});
</script>

<style scoped></style>
