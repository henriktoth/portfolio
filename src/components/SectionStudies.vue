<script setup>
defineProps({
    title: {
        type: String,
        default: "Tanulmányok",
    },
});
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold text-center mt-10">{{ title.toUpperCase() }}</h2>
        <div class="flex justify-around">
            <slot></slot>
        </div>
    </div>
</template>