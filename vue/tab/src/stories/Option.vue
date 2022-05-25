<template>
  <div class="textPane">
    <h2>{{ text }}</h2>
  </div>
</template>

<script setup lang="ts">
export interface OptionProps {
  title: string; // título da tab
  text: string; // texto da tab
}

// define as propriedades
defineProps<OptionProps>();
</script>

<style>
.textPane {
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  border: 2px solid #aaa;
  background-color: #f0f0f0;
}
</style>
