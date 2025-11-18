<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n'

const windowWidth = ref(window.innerWidth);
const { t } = useI18n()

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
    <div class="m-2 px-4 md:px-15 flex flex-col-reverse md:flex-row justify-around items-center min-h-[85vh] gap-5">
        <div class="flex flex-col gap-3 w-full md:w-[50%] items-center md:items-start">
            <p class="text-neutral-500">Hello, a nevem:</p>
            <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-center md:text-left">{{ name.toUpperCase() }}
            </h1>
            <p class="text-justify max-w-[85%] text-sm md:text-base">{{ description }}</p>
        </div>
        <div class="w-[300px] md:w-[450px] p-5 profile-border">
            <img :src="profilePic" alt="profile picture" class="w-full h-auto profile-picture">
        </div>
    </div>
</template>