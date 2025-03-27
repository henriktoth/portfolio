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
    <div class="border-3 rounded-2xl flex justify-around items-center max-w-[50%] min-h-[300px]">
        <div class="max-w-[50%]">
            <p class="text-2xl uppercase font-bold mb-2">{{ name }}</p>
            <div>
                <Icon v-for="(iconName, index) in techStack" :key="index" :icon="iconName" width="128" height="128" />
            </div>
            <p class="text-justify"> {{ description }}</p>
        </div>
        <Icon :icon="icon" width="128" height="128"/>
    </div>
</template>