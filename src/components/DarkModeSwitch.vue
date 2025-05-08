<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark');
};
</script>

<template>
    <button 
        @click="toggleDarkMode" 
        class=" p-2 rounded-full bg-neutral-800 dark:bg-neutral-200 transition-colors duration-200 hover:cursor-pointer"
    >
        <Icon 
            :icon="isDarkMode ? 'ph:sun-bold' : 'ph:moon-bold'" 
            class="text-white dark:text-neutral-800" 
            width="24" 
            height="24"
        />
    </button>
</template> 