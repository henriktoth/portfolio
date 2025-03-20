<script setup>
defineProps({
    title: {
        type: String,
        default: "Tanulmányok",
    },
});
</script>

<template>
    <div class="pb-20">
        <h2 class="text-4xl font-bold text-center mt-20 mb-10">{{ title.toUpperCase() }}</h2>
        <div class="flex flex-wrap justify-center gap-5">
            <slot></slot>
        </div>
    </div>
</template>