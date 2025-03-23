<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    name: String,
    techStack: Array,
    description: String,
    icon: String
});
</script>

<template>
    <div class="border-3 rounded-2xl">
        <p>{{ name }}</p>
        <div>
            <Icon v-for="(icon, index) in techStack" :key="index" :icon="icon" width="128" height="128" />
        </div>
        <p> {{ description }}</p>
        <Icon :icon="icon" width="128" height="128"/>
    </div>
</template>