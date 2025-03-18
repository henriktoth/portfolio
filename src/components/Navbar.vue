<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isNavOpen = ref(false);
const windowWidth = ref(window.innerWidth);

defineProps({
    links: {
        type: Array
    }
})

function updateWindowWidth() {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
})

function toggleNav() {
    isNavOpen.value = !isNavOpen.value;
    const navButton = document.querySelector('#navbar button');
    navButton.textContent = isNavOpen.value ? 'x' : '☰';
    navButton.classList.toggle('right-2.5', isNavOpen.value);
}
</script>

<template>
    <nav class="sticky top-2">

        <div id="navbar" class="bg-neutral-800 m-2 rounded-2xl p-5 flex justify-between">

            <div class="flex flex-col max-w-40 items-center">
                <h1 class="text-2xl font-bold tracking-wide">PORTFOLIO</h1>
                <p class="text-[12px] bg-neutral-600 p-1 rounded-lg tracking-[0.4em]">TÓTH HENRIK</p>
            </div>

            <button v-if="windowWidth < 900" @click="toggleNav"
                class="cursor-pointer text-5xl relative bottom-1.5">☰</button>
            <ul  v-else class="flex gap-3">
                <li v-for="link in links"
                    class="hover:bg-neutral-600 px-2 py-3 rounded-xl w-[100%] flex items-center text-[14px]">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>

        </div>

        <ul v-if="isNavOpen" id="navbar-list" class="bg-neutral-800 m-2 rounded-2xl p-5 flex flex-col items-center text-sm
                    absolute left-0 right-0 top-[100px] z-50">
            <li v-for="link in links" class="hover:bg-neutral-600 px-2 py-3 rounded-xl w-[100%] text-center">
                <a :href="link.url">{{ link.text }}</a>
            </li>
        </ul>

    </nav>
</template>