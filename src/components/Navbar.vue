<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DarkModeSwitch from './DarkModeSwitch.vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
function setLanguage(lang) {
    locale.value = lang
}
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
    const navButton = document.querySelector('#nav-button');
    navButton.textContent = isNavOpen.value ? 'x' : '☰';
    navButton.classList.toggle('right-2.5', isNavOpen.value);
}

function handleLinkClick() {
    isNavOpen.value = false;
    document.querySelector('#nav-button').textContent = '☰';
}
</script>

<template>
    <nav class="sticky top-2 z-100">
        <div id="navbar" class="bg-neutral-800 m-2 rounded-2xl p-5 flex justify-between">
            <div class="flex flex-row gap-5">
                <div class="flex flex-col max-w-40 items-center">
                    <h1 class="text-2xl font-bold tracking-wide">PORTFOLIO</h1>
                    <p class="text-[12px] bg-neutral-600 p-1 rounded-lg tracking-[0.4em]">{{
                        t('main.name').toUpperCase() }}</p>
                </div>
                <div class="flex flex-col justify-center">
                    <DarkModeSwitch class="max-h-[70%]" />
                </div>
            </div>
            <button id="nav-button" v-if="windowWidth < 900" @click="toggleNav"
                class="cursor-pointer text-5xl relative bottom-1.5">☰</button>
            <div v-else class="flex items-center gap-3">
                <ul class="flex gap-3">
                    <li v-for="link in links"
                        class="hover:bg-neutral-600 px-2 py-3 rounded-xl w-[100%] flex items-center text-[14px] transition duration-250">
                        <a :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>

                <div class="flex items-center ml-4 pl-4 border-l border-neutral-700 gap-2">
                    <button @click="setLanguage('en')"
                        :class="locale === 'en' ? 'bg-emerald-500 text-white px-2 py-1 rounded hover:cursor-pointer' : 'bg-neutral-700 text-white px-2 py-1 rounded hover:cursor-pointer'">EN</button>
                    <button @click="setLanguage('hu')"
                        :class="locale === 'hu' ? 'bg-emerald-500 text-white px-2 py-1 rounded hover:cursor-pointer' : 'bg-neutral-700 text-white px-2 py-1 rounded hover:cursor-pointer'">HU</button>
                </div>
            </div>

        </div>

        <transition name="fade">
            <ul v-if="isNavOpen" id="navbar-list" class="bg-neutral-800 m-2 rounded-2xl p-5 flex flex-col items-center text-sm
                absolute left-0 right-0 top-[100px] z-50">
                <li v-for="link in links"
                    class="hover:bg-neutral-600 px-2 py-3 rounded-xl w-[100%] text-center transition duration-250">
                    <a :href="link.url" @click="handleLinkClick">{{ link.text }}</a>
                </li>
                <li class="w-full text-center pt-2">
                    <div class="flex items-center justify-center gap-2">
                        <button @click="() => { setLanguage('en'); handleLinkClick(); }"
                            :class="locale === 'en' ? 'bg-emerald-500 text-white px-2 py-1 rounded hover:cursor-pointer' : 'bg-neutral-700 text-white px-2 py-1 rounded hover:cursor-pointer'">EN</button>
                        <button @click="() => { setLanguage('hu'); handleLinkClick(); }"
                            :class="locale === 'hu' ? 'bg-emerald-500 text-white px-2 py-1 rounded hover:cursor-pointer' : 'bg-neutral-700 text-white px-2 py-1 rounded hover:cursor-pointer'">HU</button>
                    </div>
                </li>
            </ul>
        </transition>
    </nav>
</template>