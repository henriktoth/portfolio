<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const windowWidth = ref(window.innerWidth);

defineProps({
    name: String,
    description: String,
    profilePic: String,
});

function updateWindowWidth() {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>

<template>
    <div class="m-2 px-15 flex justify-around items-center min-h-[85vh] max-lg:flex-col-reverse max-lg:gap-5">
        <div class="flex flex-col gap-3 w-[50%] max-lg:items-center max-lg:w-[100%]">
            <p class="text-neutral-800">Hello, a nevem:</p>
            <h1 class="text-8xl font-bold max-lg:text-6xl max-lg:text-center"> {{ name.toUpperCase() }}</h1>
            <p class=" text-justify max-w-[85%]"> {{ description }}</p>
        </div>
        <div class="w-[450px] p-5 profile-border">
            <img :src="profilePic" alt="profile picture">
        </div>
    </div>
</template>