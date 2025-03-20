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
    <div class="pb-20">
        <div class="mt-20 mb-10">
            <h2 class="text-4xl font-bold text-center">{{ title.toUpperCase() }}</h2>
            <p class="text-center">{{ subtitle }}</p>
        </div>
        <div class="flex flex-wrap justify-center gap-5">
            <slot></slot>
        </div>
    </div>
</template>