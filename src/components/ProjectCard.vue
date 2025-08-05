<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    name: String,
    isInDev: Boolean,
    techStack: Array,
    description: String,
    icon: String,
    github: String,
    demo: String
});

</script>

<template>
    <div class="border-3 rounded-2xl flex flex-col md:flex-row justify-around items-center w-full md:max-w-[50%] min-h-[350px] p-5 gap-5">
        <div class="flex flex-col justify-center w-full md:w-[50%] min-h-[400px] py-5">
            <p class="text-2xl uppercase font-bold mb-2 text-center md:text-left">{{ name }}</p>
            <p class="text-sm text-center text-white bg-red-500 w-fit p-2 mb-2 rounded-md" v-if="isInDev">IN DEVELOPMENT</p>
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Icon v-for="(iconName, index) in techStack" :key="index" :icon="iconName" width="32" height="32" />
            </div>
            <p class="text-justify mt-4"> {{ description }}</p>
            <div class="flex items-center justify-center md:justify-start mt-auto gap-4 py-5">
                <a :href="github" target="_blank" class="flex justify-center bg-neutral-800 hover:bg-blue-500 hover:cursor-pointer text-white py-2 px-10 rounded-2xl no-underline w-24">Forráskód</a>
                <a v-if="demo" :href="demo" target="_blank" class="flex justify-center bg-neutral-800 hover:bg-emerald-600 hover:cursor-pointer text-white py-2 px-10 rounded-2xl no-underline w-24">DEMO</a>
            </div>
        </div>
        <div class="flex justify-center w-full md:w-auto">
            <Icon :icon="icon" width="128" height="128" class="max-w-[128px] max-h-[128px]"/>
        </div>
    </div>
</template>