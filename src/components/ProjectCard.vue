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
        <div class="flex flex-col justify-center w-[50%] h-[350px] py-5">
            <p class="text-2xl uppercase font-bold mb-2">{{ name }}</p>
            <div>
                <Icon v-for="(iconName, index) in techStack" :key="index" :icon="iconName" width="128" height="128" />
            </div>
            <p class="text-justify"> {{ description }}</p>
            <button class="bg-neutral-800 hover:bg-neutral-600 hover:cursor-pointer text-white py-2 px-10 my-5 rounded-2xl w-[50%]">Forráskód</button>
        </div>
        <Icon :icon="icon" width="128" height="128"/>
    </div>
</template>