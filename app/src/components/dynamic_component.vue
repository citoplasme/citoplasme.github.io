<template>
  <component :is="async_component"></component>
</template>

<script setup lang="ts">
import { defineAsyncComponent, toRefs } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
}); 

const { name } = toRefs(props);

const async_component = defineAsyncComponent({
  loader: () => import(`./icons/tools/${name.value}.vue`),
  delay: 0,
  timeout: 3000,
})
</script>