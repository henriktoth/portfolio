<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    icon: String,
    name: String
})
</script>

<template>
    <div class="border-3 rounded-2xl p-2
                transition-transform duration-300 hover:scale-115 cursor-default">
        <Icon :icon="icon" width="96" height="96" />
        <p class="font-bold text-center">{{ name }}</p>
    </div>
</template>