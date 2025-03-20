<script setup>
defineProps({
  year: String,
  name: String,
  subname: String,
  data: Array
});
</script>

<template>
  <div class="study-card">
    <p>{{ year }}</p>
    <p> {{ name }}</p>
    <p> {{ subname }}</p>
    <div>
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
    </div>
  </div>
</template>
