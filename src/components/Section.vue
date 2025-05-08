<script setup>
defineProps({
    title: {
        type: String,
        default: "Section",
    },
    subtitle: {
        type: String,
        default: "",
    }
});
</script>

<template>
    <div class="pb-10 md:pb-20">
        <div class="mt-10 md:mt-20 mb-5 md:mb-10 px-4">
            <h2 class="text-2xl md:text-4xl font-bold text-center">{{ title.toUpperCase() }}</h2>
            <p class="text-center text-sm md:text-base mt-2">{{ subtitle }}</p>
        </div>
        <div class="flex flex-wrap justify-center gap-3 md:gap-5 px-2 md:px-4">
            <slot></slot>
        </div>
    </div>
</template>