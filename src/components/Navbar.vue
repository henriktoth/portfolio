<script setup>
import { ref } from 'vue';
const isNavOpen = ref(false);
defineProps({
    links: {
        type: Array
    }
})
function toggleNav() {
    isNavOpen.value = !isNavOpen.value;
    
    const navButton = document.querySelector('#navbar button');
    
    navButton.textContent = isNavOpen.value ? 'x' : '☰';
    navButton.classList.toggle('right-2.5', isNavOpen.value);
}
</script>

<template>
    <nav class="">
        <div id="navbar" class="bg-neutral-800 m-2 rounded-2xl p-5 flex justify-between">
            <div class="flex flex-col max-w-40 items-center">
                <h1 class="text-2xl font-bold tracking-wide">PORTFOLIO</h1>
                <p class="text-[12px] bg-neutral-600 p-1 rounded-lg tracking-[0.4em]">TÓTH HENRIK</p>
            </div>
            <button @click="toggleNav" class=" cursor-pointer text-5xl relative bottom-1.5">☰</button>
        </div>
        <ul v-if="isNavOpen" id="navbar-list"
            class="bg-neutral-800 m-2 rounded-2xl p-5 flex flex-col items-center text-sm">
            <li v-for="link in links" class="hover:bg-neutral-600 px-2 py-3 rounded-xl w-[100%] text-center">
                <a :href="link.url">{{ link.text }}</a>
            </li>
        </ul>
    </nav>
</template>