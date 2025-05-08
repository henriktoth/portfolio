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
    <div class="border-3 rounded-2xl flex flex-col md:flex-row justify-around items-center w-full md:max-w-[50%] min-h-[350px] p-5 gap-5">
        <div class="flex flex-col justify-center w-full md:w-[50%] min-h-[400px] py-5">
            <p class="text-2xl uppercase font-bold mb-2 text-center md:text-left">{{ name }}</p>
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Icon v-for="(iconName, index) in techStack" :key="index" :icon="iconName" width="32" height="32" />
            </div>
            <p class="text-justify mt-4"> {{ description }}</p>
            <div class="flex justify-center md:justify-start mt-auto">
                <button class="flex justify-center bg-neutral-800 hover:bg-neutral-600 hover:cursor-pointer text-white py-2 px-10 my-5 rounded-2xl w-[50%]">Forráskód</button>
            </div>
        </div>
        <div class="flex justify-center w-full md:w-auto">
            <Icon :icon="icon" width="128" height="128" class="max-w-[128px] max-h-[128px]"/>
        </div>
    </div>
</template>