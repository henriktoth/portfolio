<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    icon: String,
    year: String,
    name: String,
    subname: String,
    data: Array
});
</script>

<template>
    <div class="flex flex-col items-center border-3 rounded-2xl p-5 
                transition-transform duration-300 hover:scale-105 cursor-default">
        <Icon class="pb-5" :icon="icon" width="128" height="128" />
        <p class="text-md font-bold pb-3">{{ year }}</p>
        <p class="text-2xl"> {{ name }}</p>
        <p class="pb-5"> {{ subname }}</p>
        <div>
            <ul class="list-disc pl-5">
                <li v-for="(item, index) in data" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
